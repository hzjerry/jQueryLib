/**
 * jQuery 地区下拉列表联动选择控件
 * @character_set UTF-8
 * @author Jerry.li(lijian@dzs.mobi)
 * @version V0.201407232014/7/232014/7/23
 * @example
 * 	<code>
 *      <select class="form-control" id="inputPrv"></select>
 *      <select class="form-control" id="inputCity"></select>
 * 	    $('#inputPrv').area_linkage({$city:$('#inputCity')}); //设置与初始化都用这个语句
 * 	    $('#inputPrv').area_linkage({$city:$('#inputCity'), init_areaid:'CN0301'}); //设置与初始化都用这个语句
 * 	</code>
 */
;(function($){
    $.fn.extend({
        //地区表信息
        _aAreaData : [{id:'CN01',name:'北京',citys:[{id:'CN01',name:'北京'}]},{id:'CN02',name:'天津',citys:[{id:'CN02',name:'天津'}]},{id:'CN03',name:'河北',citys:[{id:'CN0301',name:'石家庄'},{id:'CN0302',name:'南宫'},{id:'CN0303',name:'辛集'},{id:'CN0304',name:'衡水'},{id:'CN0305',name:'邢台'},{id:'CN0306',name:'沙河'},{id:'CN0307',name:'邯郸'},{id:'CN0308',name:'沧州'},{id:'CN0309',name:'泊头'},{id:'CN0310',name:'任丘'},{id:'CN0311',name:'唐山'},{id:'CN0312',name:'秦皇岛'},{id:'CN0313',name:'北戴河'},{id:'CN0314',name:'承德'},{id:'CN0315',name:'保定'},{id:'CN0316',name:'涿州'},{id:'CN0317',name:'定州'},{id:'CN0318',name:'张家口'},{id:'CN0319',name:'廊坊'}]},{id:'CN04',name:'内蒙古',citys:[{id:'CN0420',name:'呼和浩特'},{id:'CN0421',name:'集宁'},{id:'CN0422',name:'二连浩特'},{id:'CN0423',name:'包头'},{id:'CN0424',name:'临河'},{id:'CN0425',name:'乌海'},{id:'CN0426',name:'东胜'},{id:'CN0427',name:'海拉尔'},{id:'CN0428',name:'满洲里'},{id:'CN0429',name:'牙克石'},{id:'CN0430',name:'赤峰'},{id:'CN0431',name:'锡林浩特'},{id:'CN0432',name:'乌兰浩特'},{id:'CN0433',name:'通辽'},{id:'CN0434',name:'鄂尔多斯'},{id:'CN0435',name:'呼伦贝尔'},{id:'CN0436',name:'兴安盟'},{id:'CN0437',name:'锡林郭勒盟'},{id:'CN0438',name:'乌兰察布盟'},{id:'CN0439',name:'巴彦淖尔盟'},{id:'CN0440',name:'阿拉善盟'},{id:'CN0441',name:'巴彦浩特'},{id:'CN0442',name:'巴彦卓尔盟'},{id:'CN0443',name:'伊克昭盟'}]},{id:'CN05',name:'山西',citys:[{id:'CN0541',name:'太原'},{id:'CN0542',name:'榆次'},{id:'CN0543',name:'忻州'},{id:'CN0544',name:'大同'},{id:'CN0545',name:'临汾'},{id:'CN0546',name:'侯马'},{id:'CN0547',name:'运城'},{id:'CN0548',name:'阳泉'},{id:'CN0549',name:'长治'},{id:'CN0550',name:'晋城'},{id:'CN0551',name:'朔州'},{id:'CN0552',name:'晋中'},{id:'CN0553',name:'吕梁'},{id:'CN0554',name:'离石'}]},{id:'CN06',name:'山东',citys:[{id:'CN0654',name:'济南'},{id:'CN0655',name:'聊城'},{id:'CN0656',name:'临清'},{id:'CN0657',name:'德州'},{id:'CN0658',name:'淄博'},{id:'CN0659',name:'滨州'},{id:'CN0660',name:'东营'},{id:'CN0661',name:'潍坊'},{id:'CN0662',name:'诸城'},{id:'CN0663',name:'青州'},{id:'CN0664',name:'烟台'},{id:'CN0665',name:'威海'},{id:'CN0666',name:'青岛'},{id:'CN0667',name:'泰安'},{id:'CN0668',name:'莱芜'},{id:'CN0669',name:'新泰'},{id:'CN0670',name:'济宁'},{id:'CN0671',name:'曲阜'},{id:'CN0672',name:'荷泽'},{id:'CN0673',name:'临沂'},{id:'CN0674',name:'日照'},{id:'CN0675',name:'枣庄'},{id:'CN0676',name:'藤州'}]},{id:'CE01',name:'上海',citys:[{id:'CE01',name:'上海'}]},{id:'CE02',name:'江苏',citys:[{id:'CE0201',name:'南京'},{id:'CE0202',name:'仪征'},{id:'CE0203',name:'镇江'},{id:'CE0204',name:'丹阳'},{id:'CE0205',name:'常州'},{id:'CE0206',name:'无锡'},{id:'CE0207',name:'宜兴'},{id:'CE0208',name:'江阴'},{id:'CE0209',name:'苏州'},{id:'CE0210',name:'常熟'},{id:'CE0211',name:'徐州'},{id:'CE0212',name:'连云港'},{id:'CE0213',name:'淮阴'},{id:'CE0214',name:'淮安'},{id:'CE0215',name:'宿迁'},{id:'CE0216',name:'盐城'},{id:'CE0217',name:'东台'},{id:'CE0218',name:'扬州'},{id:'CE0219',name:'泰州'},{id:'CE0220',name:'兴化'},{id:'CE0221',name:'南通'}]},{id:'CE03',name:'安徽',citys:[{id:'CE0322',name:'合肥'},{id:'CE0323',name:'淮南'},{id:'CE0324',name:'蚌埠'},{id:'CE0325',name:'宿州'},{id:'CE0326',name:'淮北'},{id:'CE0327',name:'阜阳'},{id:'CE0328',name:'毫州'},{id:'CE0329',name:'六安'},{id:'CE0330',name:'巢湖'},{id:'CE0331',name:'滁州'},{id:'CE0332',name:'芜湖'},{id:'CE0333',name:'宣城'},{id:'CE0334',name:'黄山'},{id:'CE0335',name:'马鞍山'},{id:'CE0336',name:'铜陵'},{id:'CE0337',name:'池州'},{id:'CE0338',name:'安庆'},{id:'CE0339',name:'亳州'}]},{id:'CE04',name:'浙江',citys:[{id:'CE0439',name:'杭州'},{id:'CE0440',name:'萧山'},{id:'CE0441',name:'绍兴'},{id:'CE0442',name:'湖州'},{id:'CE0443',name:'嘉兴'},{id:'CE0444',name:'海宁'},{id:'CE0445',name:'宁波'},{id:'CE0446',name:'余姚'},{id:'CE0447',name:'舟山'},{id:'CE0448',name:'临海'},{id:'CE0449',name:'椒江'},{id:'CE0450',name:'金华'},{id:'CE0451',name:'兰溪'},{id:'CE0452',name:'丽水'},{id:'CE0453',name:'衢州'},{id:'CE0454',name:'江山'},{id:'CE0455',name:'温州'},{id:'CE0456',name:'义乌'},{id:'CE0457',name:'东阳'},{id:'CE0458',name:'瑞安'},{id:'CE0459',name:'乐清'},{id:'CE0460',name:'台州'}]},{id:'CS01',name:'广西',citys:[{id:'CS0101',name:'南宁'},{id:'CS0102',name:'凭祥'},{id:'CS0103',name:'百色'},{id:'CS0104',name:'钦州'},{id:'CS0105',name:'北海'},{id:'CS0106',name:'玉林'},{id:'CS0107',name:'桂林'},{id:'CS0108',name:'梧州'},{id:'CS0109',name:'柳州'},{id:'CS0110',name:'台山'},{id:'CS0111',name:'河池'},{id:'CS0112',name:'防城港'},{id:'CS0113',name:'贵港'},{id:'CS0114',name:'贺州'}]},{id:'CS02',name:'广东',citys:[{id:'CS0215',name:'广州'},{id:'CS0216',name:'清远'},{id:'CS0217',name:'东莞'},{id:'CS0218',name:'韶关'},{id:'CS0219',name:'梅州'},{id:'CS0220',name:'汕头'},{id:'CS0221',name:'潮州'},{id:'CS0222',name:'惠州'},{id:'CS0223',name:'汕尾'},{id:'CS0224',name:'河源'},{id:'CS0225',name:'深圳'},{id:'CS0226',name:'湛江'},{id:'CS0227',name:'茂名'},{id:'CS0228',name:'肇庆'},{id:'CS0229',name:'佛山'},{id:'CS0230',name:'中山'},{id:'CS0231',name:'江门'},{id:'CS0232',name:'阳江'},{id:'CS0233',name:'珠海'},{id:'CS0234',name:'揭阳'},{id:'CS0235',name:'云浮'},{id:'CS0240',name:'广州'}]},{id:'CS03',name:'福建',citys:[{id:'CS0336',name:'福州'},{id:'CS0337',name:'莆田'},{id:'CS0338',name:'南平'},{id:'CS0339',name:'邵武'},{id:'CS0340',name:'厦门'},{id:'CS0341',name:'泉州'},{id:'CS0342',name:'石狮'},{id:'CS0343',name:'漳州'},{id:'CS0344',name:'龙岩'},{id:'CS0345',name:'三明'},{id:'CS0346',name:'永安'},{id:'CS0347',name:'宁德'}]},{id:'CS04',name:'海南',citys:[{id:'CS0448',name:'海口'},{id:'CS0449',name:'三亚'},{id:'CS0450',name:'通什'},{id:'CS0451',name:'儋州'}]},{id:'CM01',name:'河南',citys:[{id:'CM0101',name:'郑州'},{id:'CM0102',name:'新乡'},{id:'CM0103',name:'焦作'},{id:'CM0104',name:'安阳'},{id:'CM0105',name:'鹤壁'},{id:'CM0106',name:'濮阳'},{id:'CM0107',name:'许昌'},{id:'CM0108',name:'缧河'},{id:'CM0109',name:'驻马店'},{id:'CM0110',name:'信阳'},{id:'CM0111',name:'周口'},{id:'CM0112',name:'平顶山'},{id:'CM0113',name:'洛阳'},{id:'CM0114',name:'三门峡'},{id:'CM0115',name:'义马'},{id:'CM0116',name:'南阳'},{id:'CM0117',name:'开封'},{id:'CM0118',name:'商丘'},{id:'CM0120',name:'漯河'},{id:'CM0129',name:'潢川'}]},{id:'CM02',name:'湖北',citys:[{id:'CM0219',name:'武汉'},{id:'CM0220',name:'麻城'},{id:'CM0221',name:'天门'},{id:'CM0222',name:'孝感'},{id:'CM0223',name:'应城'},{id:'CM0224',name:'安陆'},{id:'CM0225',name:'仙桃'},{id:'CM0226',name:'洪湖'},{id:'CM0227',name:'沙'},{id:'CM0228',name:'石首'},{id:'CM0229',name:'荆门'},{id:'CM0230',name:'黄石'},{id:'CM0231',name:'鄂州'},{id:'CM0232',name:'武穴'},{id:'CM0233',name:'咸宁'},{id:'CM0234',name:'襄樊'},{id:'CM0235',name:'蒲昕'},{id:'CM0236',name:'随州'},{id:'CM0237',name:'老河口'},{id:'CM0238',name:'丹江口'},{id:'CM0239',name:'十堰'},{id:'CM0240',name:'宜昌'},{id:'CM0241',name:'枝城'},{id:'CM0242',name:'恩施'},{id:'CM0243',name:'利川'},{id:'CM0244',name:'荆州'},{id:'CM0245',name:'黄冈'},{id:'CM0246',name:'江汉'},{id:'CM0247',name:'潜江'},{id:'CM0248',name:'神农架'}]},{id:'CM03',name:'湖南',citys:[{id:'CM0346',name:'长沙'},{id:'CM0347',name:'湘潭'},{id:'CM0348',name:'湘乡'},{id:'CM0349',name:'株洲'},{id:'CM0350',name:'益阳'},{id:'CM0351',name:'岳阳'},{id:'CM0352',name:'汨罗'},{id:'CM0353',name:'常德'},{id:'CM0354',name:'津市'},{id:'CM0355',name:'吉首'},{id:'CM0356',name:'大庸'},{id:'CM0357',name:'娄底'},{id:'CM0358',name:'连源'},{id:'CM0359',name:'冷水江'},{id:'CM0360',name:'怀化'},{id:'CM0361',name:'洪江'},{id:'CM0362',name:'衡阳'},{id:'CM0363',name:'来阳'},{id:'CM0364',name:'邵阳'},{id:'CM0365',name:'彬州'},{id:'CM0366',name:'永州'},{id:'CM0367',name:'冷水滩'},{id:'CM0368',name:'张家界'},{id:'CM0369',name:'湘西'},{id:'CM0370',name:'郴州'}]},{id:'CM04',name:'江西',citys:[{id:'CM0470',name:'南昌'},{id:'CM0471',name:'九江'},{id:'CM0472',name:'景德镇'},{id:'CM0473',name:'上饶'},{id:'CM0474',name:'鹰潭'},{id:'CM0475',name:'宜春'},{id:'CM0476',name:'新余'},{id:'CM0477',name:'萍乡'},{id:'CM0478',name:'赣州'},{id:'CM0479',name:'吉安'},{id:'CM0480',name:'井冈山'},{id:'CM0481',name:'抚州'},{id:'CM0482',name:'临川'}]},{id:'EN01',name:'黑龙江',citys:[{id:'EN0101',name:'哈尔滨'},{id:'EN0102',name:'阿城'},{id:'EN0103',name:'肇东'},{id:'EN0104',name:'绥化'},{id:'EN0105',name:'伊春'},{id:'EN0106',name:'佳木斯'},{id:'EN0107',name:'鹤岗'},{id:'EN0108',name:'七台河'},{id:'EN0109',name:'双鸭山'},{id:'EN0110',name:'同江'},{id:'EN0111',name:'牡丹江'},{id:'EN0112',name:'绥汾河'},{id:'EN0113',name:'鸡西'},{id:'EN0114',name:'齐齐哈尔'},{id:'EN0115',name:'大庆'},{id:'EN0116',name:'北安'},{id:'EN0117',name:'黑河'},{id:'EN0118',name:'五大连池'},{id:'EN0119',name:'大兴安岭'},{id:'EN0120',name:'加格达奇'}]},{id:'EN02',name:'吉林',citys:[{id:'EN0220',name:'长春'},{id:'EN0221',name:'扶余'},{id:'EN0222',name:'吉林'},{id:'EN0223',name:'桦甸'},{id:'EN0224',name:'延吉'},{id:'EN0225',name:'图门'},{id:'EN0226',name:'龙井'},{id:'EN0227',name:'敦化'},{id:'EN0228',name:'通化'},{id:'EN0229',name:'集安'},{id:'EN0230',name:'浑江'},{id:'EN0231',name:'梅河口'},{id:'EN0232',name:'四平'},{id:'EN0233',name:'公主岭'},{id:'EN0234',name:'辽源'},{id:'EN0235',name:'白城'},{id:'EN0236',name:'洮南'},{id:'EN0237',name:'白山'},{id:'EN0238',name:'松原'},{id:'EN0239',name:'延边'},{id:'EN0240',name:'珲春'}]},{id:'EN03',name:'辽宁',citys:[{id:'EN0340',name:'沈阳'},{id:'EN0341',name:'辽阳'},{id:'EN0342',name:'铁岭'},{id:'EN0343',name:'铁岭'},{id:'EN0344',name:'抚顺'},{id:'EN0345',name:'鞍山'},{id:'EN0346',name:'海城'},{id:'EN0347',name:'营口'},{id:'EN0348',name:'大连'},{id:'EN0349',name:'瓦房店'},{id:'EN0350',name:'本溪'},{id:'EN0351',name:'丹东'},{id:'EN0352',name:'锦州'},{id:'EN0353',name:'锦西'},{id:'EN0354',name:'兴城'},{id:'EN0355',name:'朝阳'},{id:'EN0356',name:'北票'},{id:'EN0357',name:'阜新'},{id:'EN0358',name:'盘锦'},{id:'EN0359',name:'葫芦岛'}]},{id:'WS01',name:'西藏',citys:[{id:'WS0101',name:'拉萨'},{id:'WS0102',name:'日喀则'},{id:'WS0103',name:'昌都'},{id:'WS0104',name:'山南'},{id:'WS0105',name:'那曲'},{id:'WS0106',name:'阿里'},{id:'WS0107',name:'林芝'}]},{id:'WS02',name:'四川',citys:[{id:'WS0208',name:'成都'},{id:'WS0209',name:'都江堰'},{id:'WS0210',name:'温江县'},{id:'WS0211',name:'自贡'},{id:'WS0212',name:'攀枝花'},{id:'WS0213',name:'泸州'},{id:'WS0214',name:'德阳'},{id:'WS0215',name:'绵阳'},{id:'WS0216',name:'广元'},{id:'WS0217',name:'遂宁'},{id:'WS0218',name:'内江'},{id:'WS0219',name:'乐山'},{id:'WS0220',name:'南充'},{id:'WS0221',name:'眉山'},{id:'WS0222',name:'宜宾'},{id:'WS0223',name:'广安'},{id:'WS0224',name:'达州'},{id:'WS0225',name:'雅安'},{id:'WS0226',name:'巴中'},{id:'WS0227',name:'资阳'},{id:'WS0228',name:'阿坝'},{id:'WS0229',name:'甘孜'},{id:'WS0230',name:'凉山'},{id:'WS0231',name:'康定'},{id:'WS0232',name:'马尔康'},{id:'WS0233',name:'西昌'}]},{id:'WS03',name:'云南',citys:[{id:'WS0331',name:'昆明'},{id:'WS0332',name:'东川'},{id:'WS0333',name:'曲靖'},{id:'WS0334',name:'昭通'},{id:'WS0335',name:'开远'},{id:'WS0336',name:'个旧'},{id:'WS0337',name:'大理'},{id:'WS0338',name:'楚雄'},{id:'WS0339',name:'保山'},{id:'WS0340',name:'思茅'},{id:'WS0341',name:'丽江'},{id:'WS0342',name:'临沧'},{id:'WS0343',name:'红河'},{id:'WS0344',name:'文山'},{id:'WS0345',name:'西双版纳'},{id:'WS0346',name:'大理'},{id:'WS0347',name:'德宏'},{id:'WS0348',name:'怒江'},{id:'WS0349',name:'迪庆'},{id:'WS0350',name:'玉溪'}]},{id:'WS04',name:'贵州',citys:[{id:'WS0451',name:'贵阳'},{id:'WS0452',name:'六盘水'},{id:'WS0453',name:'铜仁地'},{id:'WS0454',name:'凯里'},{id:'WS0455',name:'都匀'},{id:'WS0456',name:'安顺'},{id:'WS0457',name:'兴义'},{id:'WS0458',name:'遵义'},{id:'WS0459',name:'赤水'},{id:'WS0460',name:'毕节'},{id:'WS0461',name:'黔西南'},{id:'WS0462',name:'黔东南'},{id:'WS0463',name:'黔南'},{id:'WS0465',name:'铜仁'}]},{id:'WS05',name:'重庆',citys:[{id:'WS05',name:'重庆'}]},{id:'WN01',name:'新疆',citys:[{id:'WN0101',name:'乌鲁木齐'},{id:'WN0102',name:'昌吉'},{id:'WN0103',name:'石河子'},{id:'WN0104',name:'奎屯'},{id:'WN0105',name:'博乐塔拉'},{id:'WN0106',name:'克拉玛依'},{id:'WN0107',name:'塔城'},{id:'WN0108',name:'伊宁'},{id:'WN0109',name:'阿勒泰'},{id:'WN0110',name:'吐鲁番'},{id:'WN0111',name:'哈密'},{id:'WN0112',name:'库尔勒'},{id:'WN0113',name:'阿克苏'},{id:'WN0114',name:'喀什'},{id:'WN0115',name:'阿图什'},{id:'WN0116',name:'和田'},{id:'WN0117',name:'巴音郭楞'},{id:'WN0118',name:'克孜勒苏柯尔克孜'},{id:'WN0119',name:'伊犁哈萨克'},{id:'WN0120',name:'博乐'},{id:'WN0121',name:'伊犁'}]},{id:'WN02',name:'青海',citys:[{id:'WN0220',name:'西宁'},{id:'WN0221',name:'格尔木'},{id:'WN0222',name:'德令哈'},{id:'WN0223',name:'海东'},{id:'WN0224',name:'海北'},{id:'WN0225',name:'黄南'},{id:'WN0226',name:'海南'},{id:'WN0227',name:'果洛'},{id:'WN0228',name:'玉树'},{id:'WN0229',name:'海西'},{id:'WN0230',name:'海晏'}]},{id:'WN03',name:'甘肃',citys:[{id:'WN0330',name:'兰州'},{id:'WN0331',name:'白银'},{id:'WN0332',name:'临夏'},{id:'WN0333',name:'武威'},{id:'WN0334',name:'张掖'},{id:'WN0335',name:'酒泉'},{id:'WN0336',name:'嘉峪关'},{id:'WN0337',name:'玉门'},{id:'WN0338',name:'金昌'},{id:'WN0339',name:'天水'},{id:'WN0340',name:'平凉'},{id:'WN0341',name:'西峰'},{id:'WN0342',name:'庆阳'},{id:'WN0343',name:'定西'},{id:'WN0344',name:'陇南'},{id:'WN0345',name:'甘南'}]},{id:'WN04',name:'宁夏',citys:[{id:'WN0446',name:'银川'},{id:'WN0447',name:'吴忠'},{id:'WN0448',name:'青铜峡'},{id:'WN0449',name:'石嘴山'},{id:'WN0450',name:'固原'}]},{id:'WN05',name:'陕西',citys:[{id:'WN0551',name:'西安'},{id:'WN0552',name:'咸阳'},{id:'WN0553',name:'渭南'},{id:'WN0554',name:'韩城'},{id:'WN0555',name:'延安'},{id:'WN0556',name:'宝鸡'},{id:'WN0557',name:'汉中'},{id:'WN0558',name:'铜川'},{id:'WN0559',name:'榆林'},{id:'WN0560',name:'安康'},{id:'WN0561',name:'商洛'}]},{id:'CC01',name:'香港',citys:[{id:'CC01',name:'香港'}]},{id:'CC02',name:'澳门',citys:[{id:'CC02',name:'澳门'}]},{id:'CC03',name:'台湾',citys:[{id:'CC03',name:'台湾'}]},{id:'QT01',name:'其它',citys:[{id:'QT01',name:'其它'}]}, {id:'0000',name:'--未设定--',citys:[{id:'000000',name:'--未设定--'}]}],
        /**
         * 地区选择联动处理
         * @public
         * @param object objParam 参数
         * <li>$city:设定城市列表对象</li>
         * <li>init_areaid:初始选中的areaid</li>
         * <li></li>
         * @return string
         */
        area_linkage:function(objParam){
            var aBuf = new Array();
            var $City = objParam.$city; //获取city随想的引用
            var me = this;
            //绑定城市
            if (this[0].options.length === 0){
                $.each(this._aAreaData, function(i, item){
                    aBuf.push('<option value="'+ item.id +'">'+ item.name +'</option>');
                });
                this.html(aBuf.join(''));
                aBuf = null;
            }

            //建立绑定监听(选择省时的联动城市处理)
            this.bind('change', function(){
                var sId = this.value;
                var aCitys = null;
                $.each(me._aAreaData, function(i, item){ //找到城市数组
                    if (item.id === sId){
                        aCitys = item.citys;
                        return false;
                    }
                });
                if (null !== aCitys){ //城市选择框初始化
                    aBuf = new Array();
                    $.each(aCitys, function(j, item){
                        aBuf.push('<option value="'+ item.id +'">'+ item.name +'</option>');
                    });
                    $City.html(aBuf.join(''));
                    aBuf = null;
                }
            });
            //初始值设定
            var sPrvId = null;
            var sCityId = null;
            var aCitys = null;
            if (typeof(objParam.init_areaid) === 'string' && objParam.init_areaid.length>=4){ //设定初始值
                sPrvId = objParam.init_areaid.substr(0,4); //取出省ID
                sCityId = objParam.init_areaid;
            }else{
                sPrvId = '0000'; //未设定省ID
                sCityId = '000000';//未设定城市ID
            }

            this.val(sPrvId); //省设置
            $.each(this._aAreaData, function(i, item){ //城市初始化
                if (item.id === sPrvId){
                    aCitys = item.citys;
                    return false;
                }
            });
            if (null !== aCitys){ //城市选择框初始化
                aBuf = new Array();
                $.each(aCitys, function(j, item){
                    aBuf.push('<option value="'+ item.id +'">'+ item.name +'</option>');
                });
                $City.html(aBuf.join(''));
                aBuf = null;
                $City.val(sCityId); //设定初始化值
            }

        }
    });
})(jQuery);