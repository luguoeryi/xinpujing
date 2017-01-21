//倒计时
function Countdown(oddTime, callback){
	var Now = new Date().getTime()
	var Odd = new Date(oddTime).getTime()

	var surplus = ( Odd - Now )/1000

	if( surplus<=0 ){
		callback && callback()
	}

	return formatSeconds( surplus )


	function formatSeconds(value) { 
		var theTime = parseInt(value);// 秒
		if(theTime<=0) return '00:00:00';
		var theTime1 = 0;// 分
		var theTime2 = 0;// 小时
		var result = 0;

		if(theTime >= 60) { 
			theTime1 = parseInt(theTime/60)
			theTime = parseInt(theTime%60)
		
			if(theTime1 >= 60) { 
				theTime2 = parseInt(theTime1/60)
				theTime1 = parseInt(theTime1%60)
			} 
		}

		result =  '00:00:'+TwoNumber( parseInt(theTime) )
		

		if(theTime1 > 0) { 
			result = '00:'+TwoNumber( parseInt(theTime1) )+":"+TwoNumber(theTime)
		} 

		if(theTime2 > 0) {
			result = TwoNumber( parseInt(theTime2) )+":"+TwoNumber( parseInt(theTime1) )+":"+TwoNumber(theTime)
		} 

		return result
	}
}


//美东时间
function EDT_time(){
	var _MdMsTime = new Date().getTime() - (12*60*60*1000)
	var newTimes = new Date(_MdMsTime)
	var  _Year = newTimes.getFullYear()  //年
	var _Month = TwoNumber( newTimes.getMonth()+1 )   //月
	var _Date = TwoNumber( newTimes.getDate() )  //日
	var _Day = Day( newTimes.getDay() )  //星期
	var _Hours = TwoNumber( newTimes.getHours() )  //时
	var _Minuters = TwoNumber( newTimes.getMinutes() )  //分
	var _Seconds =  TwoNumber( newTimes.getSeconds() )  //秒

	var _ThisTimes = '美东时间-'+_Year+'/'+_Month+'/'+_Date+'( '+_Day+' )'+_Hours+':'+_Minuters+':'+_Seconds

	return _ThisTimes
};

function Day(time){
	switch( time ){
		case 0 :
			return '日'
		break;
		case 1 :
			return '一'
		break;
		case 2 :
			return '二'
		break;
		case 3 :
			return '三'
		break;
		case 4 :
			return '四'
		break;
		case 5 :
			return '五'
		break;
		case 6 :
			return '六'
		break
	}
}

function TwoNumber(num){
	return typeof num === 'number' && num <=9 ? '0'+num.toString() : num.toString()
}


//单次获取数据
function getLotteryData(obj, type){
	$.showPreloader('正在加载'+type.name+'...')

	var formData = new FormData()

	formData.append('lottery', type.code)

	//console.log( type.code )

    obj.$http.post(obj.$store.state.serverURL+'cplist.php', formData).then((response) => {

    	var datas = JSON.parse( response.data )

    	console.log( datas )

		$.hidePreloader()

		if( datas.zt == 1 && datas ){

			$.toast('加载成功~', 500)

			obj.$store.state.activeLottery = type

			obj.$store.state.lotteryData = Mxtend(datas)

		}else if(  datas.zt == 0 ) {

			$.alert( datas.info, '封盘提示:')

		}else {
			$.alert( '请尽快联系客服,数据出错~~', '非常抱歉:')
		}



    }, (error) => {

    	//console.log( error )

    	$.hidePreloader()

    	$.alert('服务器错误: status: '+error.status)

    })

}

//递归获取数据
function Looplottery( _this, Ltype ){

	let _state = _this.$store.state
    _state.functions.getLotteryData(_this, Ltype)

    //投注倒计时
    clearInterval(_state.touTimer)

    _state.touTimer = setInterval(function(){

        _state.jiezhiTime = _state.functions.Countdown(_state.lotteryData.fenpan, function(){

            clearInterval(_state.touTimer)
            console.log('封盘')
        })

    }, 1000)


    //开盘倒计时
    clearInterval(_state.kaiTimer)
    _state.kaiTimer = setInterval(function(){

        _state.functions.Countdown(_state.lotteryData.kaijiang, function(){

            clearInterval(_state.kaiTimer)
            
            setTimeout(function(){

                console.log( '开奖了，当前时间为：'+new Date() )
                Looplottery( _this, Ltype)

            }, _state.timeOut)

        })

    }, 1000)

}


module.exports = {
	getLotteryData:getLotteryData,
	Countdown:Countdown,
	Looplottery:Looplottery,
	EDT_time:EDT_time
}


function Extend(opt){

	if( typeof opt != 'object' ){
		return opt
	}

	var newObj = {}

	for(var attr in opt){

		newObj[attr] = Extend( opt[attr] )

	}

	return newObj
}

function Mxtend(opt){

	var newObj = {}

	for(var attr in opt){

		newObj[attr] = opt[attr]

	}

	return newObj
}