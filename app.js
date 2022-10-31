var needle = require('needle');
var discord = require('discord.js')

var URL = 'https://kakoysegodnyaprazdnik.ru';

needle.get(URL, function(err, res){
    if (err) throw err;
    var q = res.body;
    q = q.replace(/[0-9]/g, '')
    var u = 1
    var i = q.indexOf("itemscope itemtype=\"http://schema.org/Answer\"")
    var bysy = []
    var start1 = q.indexOf('acceptedAnswer')
    var end1 = q.indexOf('</span></div></div>')
    var as1 = q.substring(start1+16,end1)
    var ifses = end1 - start1
   // console.log('zalupa'+ ifses)
    if ( ifses > 400){

        //console.log(start1)
        if(start1 > 0){

            end1 = q.indexOf('alt=""></div></div>')
            as1 = q.substring(start1+16,end1)
            q = q.substring(end1+39)
            // console.log('asfasfasfasfas    ||| '+ q)

            as1 =  as1.replace(/[a-z]/gi, '')
            as1 = as1.replace(" - ", ' — ')
            as1 = as1.replace(/[=_;||\[\]</>}).({'\-:+`$&!?"#\\0-9]/g, '')
            as1 = as1.replace("лет", '')
            as1 = as1.replace("года", '')
            as1 = as1.replace("год", '')
            as1 = as1.replace(/\s+/g, ' ')
            if( as1 === ' '){ as1 = ' International Sex Day'}
            if( as === ''){ as = ' International Sex Day'}
            bysy = [as1]
        } else {

            start1 = q.indexOf('suggestedAnswer')

            end1 = q.indexOf('</span></div></div>')

            ifses = end1-start1
           // console.log(ifses)
            if (ifses > 400){

                end1 = q.indexOf('alt=""></div></div>')
                console.log(end1)
                as1 = q.substring(start1+16,end1)
                q = q.substring(end1+39)
                // console.log('asfasfasfasfas    ||| '+ q)

                as1 =  as1.replace(/[a-z]/gi, '')
                as1 = as1.replace(" - ", ' — ')
                as1 = as1.replace(/[=_;||\[\]</>}).({'\-:+`$&!?"#\\0-9]/g, '')
                as1 = as1.replace("лет", '')
                as1 = as1.replace("года", '')
                as1 = as1.replace("год", '')
                as1 = as1.replace(/\s+/g, ' ')
                if( as1 === ' '){ as1 = ' International Sex Day'}
                if( as === ''){ as = ' International Sex Day'}
                bysy = [as1]

            } else {
                as1 = q.substring(start1+16,end1)
                q = q.substring(end1+39)


                console.log(as1)
                as1 =  as1.replace(/[a-z]/gi, '')
                as1 = as1.replace(" - ", ' — ')
                as1 = as1.replace(/[=_;||\[\]</>}).({'\-:+`$&!?"#\\0-9]/g, '')
                as1 = as1.replace("лет", '')
                as1 = as1.replace("года", '')
                as1 = as1.replace("год", '')
                as1 = as1.replace(/\s+/g, ' ')
                if( as1 === ' '){ as1 = ' International Sex Day'}
                if( as === ''){ as = ' International Sex Day'}
                bysy = [as1]
            }
        }
        console.log('zalupa')
    } else {
        as1 = q.substring(start1+16,end1)
        q = q.substring(end1+39)
       // console.log('asfasfasfasfas    ||| '+ q)

        as1 =  as1.replace(/[a-z]/gi, '')
        as1 = as1.replace(" - ", ' — ')
        as1 = as1.replace(/[=_;||\[\]</>}).({'\-:+`$&!?"#\\0-9]/g, '')
        as1 = as1.replace("лет", '')
        as1 = as1.replace("года", '')
        as1 = as1.replace("год", '')
        as1 = as1.replace(/\s+/g, ' ')
        if( as1 === ' '){ as1 = ' International Sex Day'}
        if( as === ''){ as = ' International Sex Day'}
        bysy = [as1]

    }




    as1 =  as1.replace(/[a-z]/gi, '')
    as1 = as1.replace(" - ", ' — ')
    as1 = as1.replace(/[=_;||\[\]</>}).({'\-:+`$&!?"#\\0-9]/g, '')
    as1 = as1.replace("лет", '')
    as1 = as1.replace("года", '')
    as1 = as1.replace("год", '')
    as1 = as1.replace(/\s+/g, ' ')

    //bysy = [as1]

    var as = ''
    var start = q.indexOf('itemscope itemtype="http://schema.org/Answer"')
    var end = q.indexOf('<div itemprop="suggestedAnswer"')
    var o = 0;
    while(i >= 0){

        o++
        u++
        as = q.substring(start,end)
     //   console.log('||||||||||||||||' +as + '|||||||||||||||||||||||' + o + ']\\][[')
        if(o === 1){
           // console.log(as +'||||||||||||||||||||||      '+o)
        }

        as = as.replace(/[a-z]/gi, '')
        as = as.replace(" - ", ' — ')
        as = as.replace(/[=_;||\[\]</>}).({'\-:+`$&!?"#\\0-9]/g, '')
        as = as.replace("лет", '')
        as = as.replace("года", '')
        as = as.replace("год", '')
        as = as.replace(/\s+/g, ' ')
        if (as.lastIndexOf(as.slice(0,4)) > 1) {
            as = as.substring(as.lastIndexOf(as.slice(0,4),as.length))
            if( as === ' '){ as = ' International Sex Day'}
            if( as === ''){ as = ' International Sex Day'}
            bysy.push(as)
        }
                else{
            if( as === ' '){ as = ' International Sex Day'}
            if( as === ''){ as = ' International Sex Day'}
            bysy.push(as)
            }


        // as = as.replace('undefined')

        q = q.substring(start+44)
        q = q.substring(q.indexOf('<div itemprop="suggestedAnswer"')+32)

        i = q.indexOf("itemscope itemtype=\"http://schema.org/Answer\"")
        start = q.indexOf('itemscope itemtype="http://schema.org/Answer"')
        end = q.indexOf('<div itemprop="suggestedAnswer"')
    }
    /*  var q = res.body
     var start = q.indexOf("<div id=\"main_frame\">")
     var end = q.indexOf('События в истории')
     q = q.substring(start, end)
     var a = q.replace(/[a-z]/gi, '')
      a = a.replace(/[a-z]/gi, '');
     a = a.replace(/[=_;||\[\]</>}).,({'\-:+`$&!?"#\\0-9]/g, '')

     a = a.replace(/[\r\n]+/g, '\n')

   //   a = a.replace(/\s+/g, ' ');
    //  a = a.replace("Какой Сегодня Праздник Узнайте какой сегодня праздник в России и мире на сайте КакойСегодняПраздник рф и поставьте лайк за самые интересные праздники какой сегодня праздник праздники сегодня найти свой праздник посмотреть праздники праздники здесь Какой сегодня праздник Узнайте какой сегодня праздник на сайте КакойСегодняПраздник рф Какой сегодня праздник ", '')
      /*   a = a.replace("Ноября",'')
     a = a.replace("Декабря",'')
     a = a.replace("Января",'')
     a = a.replace("Февряля",'')
     a = a.replace("Марта",'')
     a = a.replace("Мая",'')
     a = a.replace("Июня",'')
     a = a.replace("Июля",'')
     a = a.replace("Августа",'')
     a = a.replace("Сентября",'')
     a = a.replace("Октября",'')
     a = a.replace(" г ",'')

     a = a.replace("лет",'')

 */
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    var prazdnik =  ['https://darfix.ru/wp-content/uploads/0/9/1/091277bb237853b90295ee2092a98f36.jpeg'
        , 'https://pic.rutubelist.ru/video/0f/1b/0f1b2fa0ddb342961b4519de7c339c43.jpg'
        , 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614779911_144-p-prazdnichnii-fon-174.jpg'
        , 'https://new-year-party.ru/wp-content/uploads/2016/07/present-23.jpg'
        , 'https://get.wallhere.com/photo/glare-circles-colorful-explosion-bright-657993.jpg'
        , 'https://news.allelets.ru/data/images/news/20453/large2/db9dc5ac2476364fa78d682de242bbda85d43697.jpg'
        , 'https://fikiwiki.com/uploads/posts/2022-02/1645037400_13-fikiwiki-com-p-kartinki-krasivie-vozdushnie-shari-17.jpg'
        , 'https://chita-brita.ru/wp-content/uploads/2022/06/ny5-big.jpg'
        , 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614779739_144-p-prazdnichnie-foni-dlya-fotoshopa-173.jpg'
        , 'https://img3.goodfon.ru/original/1280x960/c/81/svechi-prazdnik-lyudi.jpg'
        , 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614779850_94-p-prazdnichnii-fon-113.jpg'
        , 'https://million-wallpapers.ru/wallpapers/4/93/500236747514283/prazdnichnyj-fejerverk-v-novyj-god.jpg'
        , 'https://krot.info/uploads/posts/2022-02/1644839275_9-krot-info-p-prazdnichnie-foni-9.jpg'
        , 'https://w-dog.ru/wallpapers/8/11/490007758183327/podarki-sinie-korobki-krasnye-lentochki-bantiki-syurpriz-novyj-god-prazdnik.jpg'
        , 'https://newokruga.ru/wp-content/uploads/sites/13/2021/12/fireworks-g7ad5b2609_1920.jpg'
        , 'https://darfix.ru/wp-content/uploads/7/d/6/7d629187140bc060d66e71e5864a235b.jpeg'
        , 'https://www.sunhome.ru/i/wallpapers/116/novogodnii-feierverk.orig.jpg'
        , 'https://catherineasquithgallery.com/uploads/posts/2021-12/1639777758_37-catherineasquithgallery-com-p-prazdnichnii-rozovii-fon-52.jpg'
        , 'https://mirror-venus.ru/wp-content/uploads/2020/01/original.jpg'
        , 'https://www.1zoom.ru/big/78/60749-Nika.jpg'
        , 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614779666_54-p-prazdnichnie-foni-dlya-fotoshopa-63.jpg'
        , 'https://catherineasquithgallery.com/uploads/posts/2021-03/1615819682_87-p-fon-prazdnichnii-106.jpg'
        , 'https://kartinkin.net/uploads/posts/2020-09/1600213201_21-p-detskii-prazdnichnii-fon-25.jpg'
        , 'https://w-dog.ru/wallpapers/8/7/440671108783547/fejerverk-salyut-prazdnik-vecher-krasivo.jpg'
        , 'https://w-dog.ru/wallpapers/8/8/302620949079711/schastliv-novyj-god-shampanskoe-zolotoj-prazdnik-otdyx-bokaly-serpantin-bengalskie-ogni.jpg'
        , 'https://i.artfile.ru/1990x1385_683255_[www.ArtFile.ru].jpg'
        , 'https://beautydoctor.ru/wp-content/uploads/gnewyear.jpg'
        , 'https://www.culture.ru/storage/images/fc4dd2cce03a6fcb34cade377fee4bda/0e7350bb8faf1dd3ba38bd3dd4172785.jpg'
        , 'https://mykaleidoscope.ru/uploads/posts/2021-10/1634757571_65-mykaleidoscope-ru-p-prazdnichnie-torti-78.jpg'
        , 'https://images-na.ssl-images-amazon.com/images/I/81B7iebOlSL._AC_SL1500_.jpg'
        , 'https://www.prime-stars.ru/wp-content/uploads/2021/10/vozdushnyj-prazdnik.jpg'
        , 'https://u.9111s.ru/uploads/202105/27/30053778c3e655985c8cbd8cd1552f4c.jpg'
        , 'https://mydiv.net/images/arts/ru/screens/4183.jpg'
        , 'https://s1.1zoom.ru/big0/530/Holidays_Birthday_554918_1280x853.jpg'
        , 'https://fikiwiki.com/uploads/posts/2022-02/1645015735_30-fikiwiki-com-p-salyut-krasivie-kartinki-35.jpg'
        , 'https://fikiwiki.com/uploads/posts/2022-02/1645042903_24-fikiwiki-com-p-vozdushnie-shariki-krasivie-kartinki-30.jpg'
        , 'https://i.artfile.ru/5000x3430_1421409_[www.ArtFile.ru].jpg'
        , 'https://www.fonstola.ru/download.php?file=201304/1680x1050/fonstola.ru-94359.jpg'
        , 'https://phonoteka.org/uploads/posts/2022-02/1644986047_2-phonoteka-org-p-prazdnichnii-fon-yubilei-2.jpg']
    var smilemassiv = ['<:1038_Among_Us_Pepe:801443981052477510>', '<:1235_wojak_pepe_hoodie:801443983565520947>', '<:1349_Pepe_Comfy:801443982030667777>', '<:1540_PeePeeHands:801443983162867714>', '<:1783_yellow_cri:774907789423804427>', '<:1907_Pepe_Box:801443982310637629> ', '<:2540_DiamondSword:774914604949176330> ', '<:2665_horde_wow:774914604819415040>', '<:3040_suspepe:801443982475001906> ', '<:391920304919805952:581532826873233418> ', '<:392416334870478849:581532826747404313>', '<:392204593964253192:581532826772701204> ', '<:392741985712340992:581532831092834305> ', '<:392753878375989248:581532827288469529>', '<:4349_honkler_clown:848107640311775243>', '<:4766_pepegod:801443982685110363> ', '<:486929627781005314:581532827183611905>', '<:5105_cayde_surprised:774914605377650698>', '<:552533578727292936:774914604819677216> ', '<:5604_SadSupremePepe:801443982126088222>', '<:7038_pretty_pepe_puke:801443983489892374>', '<:7443_m7:774914605013139497> ', '<:9294_Pepepunch:801443985239310336> ', '<:8934_Pepe_King:801443982848032799>', '<:7966_terraria_sdmg:774914605066878976>', '<:9751_feelssickman:801443985423728640>', '<:9791_pepe:801443981858046032>', '<:Dopepe:871694870232854528>', '<:PaimonAngry:871699280111489065> ', '<:PepeGrill:801443981509525596> ', ' <:PeepoSimp:871696169984725032> ', '<:PainPeko:871696703349219349> ', '<:PaimonShock:871698722021597194>', '<:QiqiPathetic:871698957544353853> ', '<:Sayori_yes:871694311232798780>', '<:Suicidekanna:871697068807311420>', ' <:VentiFacepalm:871699482562142249>', '<:diona_rawr:871699375385088060> ', '<:chika_thumbsup:871693762072567868>', '<:bonk:871696302109523980>', '<:Viper_Toxic:871697664918581358>', '<:gachiBASS:776001189425840158>', '<:knowledge:871696093761667082> ', ' <:koichi:871695995740782622>', '<:menhera_chan_point:871694643031588884> ', '<:reverse_card:871698071539568650> ', '<:rammus_okay:871697320717201418>', '<:press_F:871696041337036850>', '<:pepe_you_are_a_gay:871697141570101249> ', '<:stonls:871696351979765831>']
    var pizdecRandomChislo = randomInteger(0,16777215)
    console.log(pizdecRandomChislo)
    var pizdezchisla = 0
    var pizdecGotovo =  ''
    while(pizdezchisla < bysy.length-1){
     pizdecGotovo = pizdecGotovo + '⍟' + bysy[pizdezchisla] + " \n"
        pizdezchisla++
    }

    var imja =  ['праздник'
        , 'празднество'
        , 'торжество'
        , 'пир'
        , 'карнавал'
        , 'гуляние'
        , 'фиеста'
        , 'празднование'
        , 'радость'
        , 'веселье'
        , 'именины'
        , 'шабаш'
        , 'сабантуй'
        , 'свистопляска'
        , 'праздничек'
        ]
    var oskorbltniz =  ['долбаеб'
        , 'чмоня'
        , 'конч'
        , 'уебок'
        , 'еблуша'
        , 'кончелыга'
        , 'еблан'
        , 'пидорас'
        , 'очкошник'
        , 'хуесос'
        , 'сосет хуй'
        , 'ждет ваш ширзых'
        , 'опарыш'
        , 'ждёт ваши Dick пики ©<@488050343360331788>'
        , 'заглатывает лучше вашего пылесоса ©<@488050343360331788>'
        , 'при своём рождении перепутал выходы и вышел с заднего входа ©<@488050343360331788>'
        , 'очко признано биологическим оружием ©<@488050343360331788>'
        , 'приходит в банк спермы, для материла для отбеливания своего ануса ©<@488050343360331788>'
        , 'настолько уродлив, что в Мак-е его принимают за работника ©<@488050343360331788>'
        , 'когда бреется, то отрезается и кусок сала ©<@488050343360331788>'
        , 'на приёме у стоматолога глотает, а не сплёвывает ©<@488050343360331788>'
        , 'амбассадор ночного клуба "Черника" ©<@488050343360331788>'
        , 'покрывается мурашками при виде кавказских членов ©<@488050343360331788>'
        , 'когда выкладывает своё фото оно автоматически блюрится ©<@488050343360331788>'
        , 'Распиздяй колхозный'
        , 'пизда селедочная'
        , 'шалашовка '
        , 'фаршмак'
        , 'Хуйня из-под коня'
        , 'капитан потные яички'
        , 'просто щелкунчик'
        , 'Подзолупный Творожок'
        , 'жертва двух озабоченых подростков и бутылки водки'
        , 'жертва пьяного аборта'
        , 'наиграл 11к часов в 2 симс'
        , 'хамит так, как будто у него в штанах запасные яйца…'
        , 'зачали на спор'
        , 'КРЫСА ПОДЗАЛУПНАЯ'
        , 'Пиздаболище лесное'
        , 'Пизданюх'
        , 'перхоть позалупная'
        ]
    var podderzka = ['доширака и банки балтики 3'
        , 'сигарет филип морис'
        , 'члена в теалете'
        , 'чашки кофе'
        , 'мамы :С'
        , 'ожидания вашей смерти'
        , '...все еще мамы :С'
        , 'ненависти к паше'
        , 'отсутсвия амбиций'
        , 'анекдотов категории б'
        , 'поддержки'
        , 'В.В. Путина'
        , 'путинского режима'
        , 'Paladins'
       ]
    console.log(prazdnik[randomInteger(0,38)])
    var pashaHui = {
        "username": imja[randomInteger(0,14)] + " каждый день" ,
        "avatar_url": prazdnik[randomInteger(0,38)],
        "content": "",
        "embeds": [
            {
                "title": "",
                "color": pizdecRandomChislo,
                "description":  pizdecGotovo + ' \n \n \n \n***Ежедневное напоминание о том, что *** <@357814479464955906> ***||'+oskorbltniz[randomInteger(0,23)]+'||***',
                "author": {
                    "name": ""
                },
                "image": {},
                "thumbnail": {},
                "footer": {
                    "text": "Работаем при поддержке "+ podderzka[randomInteger(0,13)],
                    "icon_url": prazdnik[randomInteger(0,38)]
                },
                "fields": []
            }
        ],
        "components": []
    }
    function asdfasf (){
        console.log(1)

    }
    console.log(process.env.hook)
    var webhook = new discord.WebhookClient({url: process.env.hook})
    webhook.send(pashaHui)
  console.log(bysy);
 //   console.log(res.statusCode);

    var asfa = "zalupa keka"
   // console.log(asfa.substring(5,2))
});