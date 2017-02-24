<template>
	<!-- modal_lottery_bet -->
    <div class="popup modal_bg_white modal_base modal_form_li modal_lottery_bet">
        <header class="bar bar-nav">
            <h3 class="title">下注明细</h3>
        </header>
        <div class="content">

            <div class="content-padded text-center bet_head">
                <div class="display-box">
                    <div class="box-flex-4">
                        <span>号码</span>
                    </div>
                    <div class="box-flex-2">
                        <span>赔率</span>
                    </div>
                    <div class="box-flex-4">
                        金额
                    </div>
                    <div class="box-flex-2">
                        <i>&nbsp;</i>
                    </div>
                </div>
            </div>

            <section class="text-center">

                <div class="content-padded">
                    <div class="display-box">
                        <div class="box-flex-4">
                            <span>总和单双 双</span>
                        </div>
                        <div class="box-flex-2">
                            <span class="pernum">1.98</span>
                        </div>
                        <div class="box-flex-4">
                            <input type="number" value="50" class="ball_input" >
                        </div>
                        <div class="box-flex-2">
                            <i class="deleta_bet">X</i>
                        </div>
                    </div>
                </div>

                <div class="content-padded">
                    <div class="display-box">
                        <div class="box-flex-4">
                            <span>龙虎斗 万个  虎</span>
                        </div>
                        <div class="box-flex-2">
                            <span class="pernum">1.98</span>
                        </div>
                        <div class="box-flex-4">
                            <input type="number" value="50" class="ball_input" >
                        </div>
                        <div class="box-flex-2">
                            <i class="deleta_bet">X</i>
                        </div>
                    </div>
                </div>

                <div class="content-padded">
                    <div class="display-box">
                        <div class="box-flex-4">
                            <span>龙虎斗 万个  虎</span>
                        </div>
                        <div class="box-flex-2">
                            <span class="pernum">1.98</span>
                        </div>
                        <div class="box-flex-4">
                            <input type="number" value="50" class="ball_input" >
                        </div>
                        <div class="box-flex-2">
                            <i class="deleta_bet">X</i>
                        </div>
                    </div>
                </div>

            </section>

            <section class="bet_bottom">
                <div class="content-padded">
                    <div class="display-box">
                        <div class="box-flex-6">
                            金额&nbsp;&nbsp;<input style="display:inline-block;width:3rem;" type="number" value="50" class="ball_input" >
                        </div>
                        <div class="box-flex-6">
                            <label for=""><input type="checkbox" checked >&nbsp;预设</label>
                        </div>
                    </div>
                    <div class="display-box text-center">
                        <div class="box-flex-6">
                            <p>组数 : <span class="pernum">0</span></p>
                        </div>
                        <div class="box-flex-6">
                            <p>总金额 : <span class="pernum">0</span></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-50"><a href="#" class="button button-big button-fill button-danger">确定</a></div>
                        <div class="col-50"><a href="#" class="button button-big button-light close-popup">取消</a></div>
                    </div>
                </div>
            </section>




        </div>
    </div>
    <!-- ! end modal_lottery_bet -->
</template>

<script>
    export default {
        name: 'Bet'
    }
</script>

<style lang="scss">
    @import "../../assets/sass/var", "../../assets/sass/mixin";

    .modal_lottery_bet {
        .bar-nav ~ .content {
            bottom: 7.2rem;
            top: 4.6rem;
        }
        font-size: 0.7rem;
        .bet_head {
            position: fixed;
            top: 2.2rem;
            left: 0;
            width: 100%;
            background: $ball_item_bg;
        }
        .content-padded {
            border: 1px solid $content_bg;
            margin: 0 0.5rem;
            border-bottom: none;
        }
        .ball_input {
            width: 90%;
            display: block;
            margin: auto;
            border: 1px solid  $base_footer_color;
            height: 1.5rem;
            margin-top: -0.2rem;
            text-indent: .5em;
        }
        .deleta_bet {
            $de_bet: 18px;
            display: inline-block;
            width: $de_bet;
            height: $de_bet;
            line-height: $de_bet;
            text-align: center;
            @include border-radius(50%);
            background: $base_top_bg;
            color: #fff;
            font-style: normal;
        }
        .bet_bottom {
            position: fixed;
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
            .content-padded {
                margin: 0;
            }
        }
        .button-light:active {
            border-color: #ccc;
            color: #5f646e;
        }
    }
    .theme-dark .modal_lottery_bet .bet_head { background: none; }
    .theme-dark .modal_lottery_bet .content-padded { border: none; }
</style>
