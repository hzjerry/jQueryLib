/**
 * jQuery TopPrompt function [顶部弹出状态提示框]
 * @character_set UTF-8
 * @author Jerry.li(lijian@dzs.mobi)
 * @version 1.2014.12.09.1203
 *  Example
 * 	<code>
 * 	    //Initialization [初始化顶部弹出提示框]
 *      $.initTopPrompt(); //or $.initTopPrompt(300);
 *
 *      //show Top Prompt [显示顶部提示框]
 *      $.showTopPrompt('Loading is complete'); // or $.showTopPrompt(); Maintaining the original content
 *
 *      //hide Top Prompt [隐藏顶部提示框]
 *      $.hideTopPrompt(); // or $.hideTopPrompt('bye'); Maintaining the original content
 *
 *      //如果你有ajax的处理，可以把全局函数注册在这个对象上
 *      $.ajaxStart(function ()
 *      {	//显示后台运行状态提示条
 *          $.showTopPrompt('正在与服务器通信中...');
 *      }).ajaxStop(function ()
 *      {	//隐藏后台运行状态提示条
 *          $.hideTopPrompt('处理完成');
 *      });
 * 	</code>
 */
;(function($){
    /**
     * 是否已初始化过的标志
     * @private
     */
    var frameTopPrompt_init = false;

    $.extend({
        /**
         * 顶部弹出窗口初始化
         * @public
         * @param iWidth int 状态条宽度[默认250],单位px
         * @return void
         */
        initTopPrompt:function(iWidth){
            if (!frameTopPrompt_init){
                iWidth = (typeof(iWidth) == 'undefined')? 200 : parseInt(iWidth);
                iWidth = (iWidth < 150)? 150:iWidth;
                var aBuf = new Array();
                /*关闭按钮图标*/
                /*构造css样式*/
                aBuf.push('<style>');
                aBuf.push('.wait_img{');
                aBuf.push('background-image: url("data:image/gif;base64,R0lGODlhJQAlAJECAL3L2AYrTv///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgACACwAAAAAJQAlAAACi5SPqcvtDyGYIFpF690i8xUw3qJBwUlSadmcLqYmGQu6KDIeM13beGzYWWy3DlB4IYaMk+Dso2RWkFCfLPcRvFbZxFLUDTt21BW56TyjRep1e20+i+eYMR145W2eefj+6VFmgTQi+ECVY8iGxcg35phGo/iDFwlTyXWphwlm1imGRdcnuqhHeop6UAAAIfkEBQoAAgAsEAACAAQACwAAAgWMj6nLXAAh+QQFCgACACwVAAUACgALAAACFZQvgRi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwXABEADAADAAACBYyPqcsFACH5BAUKAAIALBUAFQAKAAsAAAITlGKZwWoMHYxqtmplxlNT7ixGAQAh+QQFCgACACwQABgABAALAAACBYyPqctcACH5BAUKAAIALAUAFQAKAAsAAAIVlC+BGL3Z3IlxUmUuhtR2LzHhsiEFACH5BAUKAAIALAEAEQAMAAMAAAIFjI+pywUAIfkEBQoAAgAsBQAFAAoACwAAAhOUYJnAagwdjGq2amXGU1PuLEYBACH5BAUKAAIALBAAAgAEAAsAAAIFhI+py1wAIfkEBQoAAgAsFQAFAAoACwAAAhWUL4AIvdnciXFSZS6G1HYvMeGyIQUAIfkEBQoAAgAsFwARAAwAAwAAAgWEj6nLBQAh+QQFCgACACwVABUACgALAAACE5RgmcBqDB2MarZqZcZTU+4sRgEAIfkEBQoAAgAsEAAYAAQACwAAAgWEj6nLXAAh+QQFCgACACwFABUACgALAAACFZQvgAi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwBABEADAADAAACBYSPqcsFADs=");');
                aBuf.push('background-size:15px 15px;');
                aBuf.push('background-repeat:no-repeat;');
                aBuf.push('background-position:0px 50%;');
                aBuf.push('padding-left: 18px;');
                aBuf.push('}');
                aBuf.push('.top_close_img{');
                aBuf.push('background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACxSURBVChTVY87CgJBEERbDLyTIqKgIF7AQ3iDDQYvYWS0eCAxMBIMNTARRFjRHau6p6UtKKam+jEfyVC7S/kzF8Y/seOMkned8msGqO7ZWhQ7MvKcYLjpmgG3C5wCM3tPRo+4j7CsO2YCdNnrjFf7VY8x4gpgsHZFv3QbIlYAl8XI2kXw1Lc3+fviO3XGq48FaqaS6fPA7HseQEau25QPCPwZV1fsyOjkgrAPkMPsOKO+C40dIio+BBcAAAAASUVORK5CYII=");');
                aBuf.push('background-size:10px 10px;');
                aBuf.push('background-repeat:no-repeat;');
                aBuf.push('background-position:center;');
                aBuf.push('display:table-cell;');
                aBuf.push('width:12px;');
                aBuf.push('height:12px;');
                aBuf.push('}');
                aBuf.push('#gc-frameTopPrompt{');
                aBuf.push('display:none;'); //默认不显示
                aBuf.push('position:fixed;');
                aBuf.push('z-index:999;');
                aBuf.push('border:1px solid #e5e5e5;');
                aBuf.push('background:#FFFFFF;');
                aBuf.push('padding:2px 5px;');
                aBuf.push('left:50%;');
                aBuf.push('margin-left:-'+ parseInt(iWidth/2) +'px;');
                aBuf.push('-moz-border-radius-bottomleft:5px;');
                aBuf.push('-moz-border-radius-bottomright:5px;');
                aBuf.push('-webkit-border-bottom-left-radius:5px;');
                aBuf.push('-webkit-border-bottom-right-radius:5px;');
                aBuf.push('-khtml-border-bottom-left-radius:5px;');
                aBuf.push('-khtml-border-bottom-right-radius:5px;');
                aBuf.push('border-bottom-left-radius:5px;');
                aBuf.push('border-bottom-right-radius:5px;');
                aBuf.push('-moz-box-shadow:rgba(200,200,200,1) 0 4px 18px;');
                aBuf.push('-webkit-box-shadow:rgba(200,200,200,1) 0 4px 18px;');
                aBuf.push('-khtml-box-shadow:rgba(200,200,200,1) 0 4px 18px;');
                aBuf.push('box-shadow:rgba(200,200,200,1) 0 4px 18px;');
                aBuf.push('}</style>');
                aBuf.push('<div id="gc-frameTopPrompt"><div style="display:table;">');
                aBuf.push('<div id="async_TopPrompt_textarea" style="display:table-cell;min-width:'+ iWidth +'px;"></div>');
                aBuf.push('<div class="top_close_img" title="隐去提示框"></div>');
                aBuf.push('</div></div>');
                $('body').append(aBuf.join(''));//注入代码
                var $my = $('#gc-frameTopPrompt');//取出gc-frameTopPrompt对象引用
                $my.find('div').find('.top_close_img').bind('click',function(){
                    $my.fadeOut(1000);
                });
                delete aBuf;
                frameTopPrompt_init = true; //初始化完成
            }
        },
        /**
         * 弹出状态条
         * @public
         * @param sMsg 状态条显示内容
         * @return void
         */
        showTopPrompt:function(sMsg){
            var bodyTop = 0;
            if (frameTopPrompt_init){
                var $my = $('#gc-frameTopPrompt');
                $my.css("top", 0);
                if (typeof(sMsg) == 'string'){
                    var $Tmp = $my.find('#async_TopPrompt_textarea');
                    $Tmp.html(sMsg);
                    $Tmp.addClass('wait_img');
                    $my.show();
                }
            }
        },
        /**
         * 隐藏窗口
         * @public
         * @param sMsg 状态条显示内容[可以不填]
         * @return void
         */
        hideTopPrompt:function(sMsg){
            if (frameTopPrompt_init){
                var $my = $('#gc-frameTopPrompt');
                if (typeof(sMsg) == 'string'){
                    var $Tmp = $my.find('#async_TopPrompt_textarea');
                    $Tmp.removeClass('wait_img');
                    $Tmp.html(sMsg);
                    $my.fadeOut(3500);
                }
            }
        },
    });
})(jQuery);