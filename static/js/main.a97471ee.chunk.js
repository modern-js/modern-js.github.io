(window["webpackJsonpmodern-js"]=window["webpackJsonpmodern-js"]||[]).push([[0],{236:function(t,e,r){t.exports=r(879)},256:function(t,e,r){},450:function(t,e,r){var i={"./Binary_Property/ASCII.js":451,"./Binary_Property/ASCII_Hex_Digit.js":452,"./Binary_Property/Alphabetic.js":453,"./Binary_Property/Any.js":454,"./Binary_Property/Assigned.js":455,"./Binary_Property/Bidi_Control.js":456,"./Binary_Property/Bidi_Mirrored.js":457,"./Binary_Property/Case_Ignorable.js":458,"./Binary_Property/Cased.js":459,"./Binary_Property/Changes_When_Casefolded.js":460,"./Binary_Property/Changes_When_Casemapped.js":461,"./Binary_Property/Changes_When_Lowercased.js":462,"./Binary_Property/Changes_When_NFKC_Casefolded.js":463,"./Binary_Property/Changes_When_Titlecased.js":464,"./Binary_Property/Changes_When_Uppercased.js":465,"./Binary_Property/Dash.js":466,"./Binary_Property/Default_Ignorable_Code_Point.js":467,"./Binary_Property/Deprecated.js":468,"./Binary_Property/Diacritic.js":469,"./Binary_Property/Emoji.js":470,"./Binary_Property/Emoji_Component.js":471,"./Binary_Property/Emoji_Modifier.js":472,"./Binary_Property/Emoji_Modifier_Base.js":473,"./Binary_Property/Emoji_Presentation.js":474,"./Binary_Property/Extended_Pictographic.js":475,"./Binary_Property/Extender.js":476,"./Binary_Property/Grapheme_Base.js":477,"./Binary_Property/Grapheme_Extend.js":478,"./Binary_Property/Hex_Digit.js":479,"./Binary_Property/IDS_Binary_Operator.js":480,"./Binary_Property/IDS_Trinary_Operator.js":481,"./Binary_Property/ID_Continue.js":482,"./Binary_Property/ID_Start.js":483,"./Binary_Property/Ideographic.js":484,"./Binary_Property/Join_Control.js":485,"./Binary_Property/Logical_Order_Exception.js":486,"./Binary_Property/Lowercase.js":487,"./Binary_Property/Math.js":488,"./Binary_Property/Noncharacter_Code_Point.js":489,"./Binary_Property/Pattern_Syntax.js":490,"./Binary_Property/Pattern_White_Space.js":491,"./Binary_Property/Quotation_Mark.js":492,"./Binary_Property/Radical.js":493,"./Binary_Property/Regional_Indicator.js":494,"./Binary_Property/Sentence_Terminal.js":495,"./Binary_Property/Soft_Dotted.js":496,"./Binary_Property/Terminal_Punctuation.js":497,"./Binary_Property/Unified_Ideograph.js":498,"./Binary_Property/Uppercase.js":499,"./Binary_Property/Variation_Selector.js":500,"./Binary_Property/White_Space.js":501,"./Binary_Property/XID_Continue.js":502,"./Binary_Property/XID_Start.js":503,"./General_Category/Cased_Letter.js":504,"./General_Category/Close_Punctuation.js":505,"./General_Category/Connector_Punctuation.js":506,"./General_Category/Control.js":507,"./General_Category/Currency_Symbol.js":508,"./General_Category/Dash_Punctuation.js":509,"./General_Category/Decimal_Number.js":510,"./General_Category/Enclosing_Mark.js":511,"./General_Category/Final_Punctuation.js":512,"./General_Category/Format.js":513,"./General_Category/Initial_Punctuation.js":514,"./General_Category/Letter.js":515,"./General_Category/Letter_Number.js":516,"./General_Category/Line_Separator.js":517,"./General_Category/Lowercase_Letter.js":518,"./General_Category/Mark.js":519,"./General_Category/Math_Symbol.js":520,"./General_Category/Modifier_Letter.js":521,"./General_Category/Modifier_Symbol.js":522,"./General_Category/Nonspacing_Mark.js":523,"./General_Category/Number.js":524,"./General_Category/Open_Punctuation.js":525,"./General_Category/Other.js":526,"./General_Category/Other_Letter.js":527,"./General_Category/Other_Number.js":528,"./General_Category/Other_Punctuation.js":529,"./General_Category/Other_Symbol.js":530,"./General_Category/Paragraph_Separator.js":531,"./General_Category/Private_Use.js":532,"./General_Category/Punctuation.js":533,"./General_Category/Separator.js":534,"./General_Category/Space_Separator.js":535,"./General_Category/Spacing_Mark.js":536,"./General_Category/Surrogate.js":537,"./General_Category/Symbol.js":538,"./General_Category/Titlecase_Letter.js":539,"./General_Category/Unassigned.js":540,"./General_Category/Uppercase_Letter.js":541,"./Script/Adlam.js":542,"./Script/Ahom.js":543,"./Script/Anatolian_Hieroglyphs.js":544,"./Script/Arabic.js":545,"./Script/Armenian.js":546,"./Script/Avestan.js":547,"./Script/Balinese.js":548,"./Script/Bamum.js":549,"./Script/Bassa_Vah.js":550,"./Script/Batak.js":551,"./Script/Bengali.js":552,"./Script/Bhaiksuki.js":553,"./Script/Bopomofo.js":554,"./Script/Brahmi.js":555,"./Script/Braille.js":556,"./Script/Buginese.js":557,"./Script/Buhid.js":558,"./Script/Canadian_Aboriginal.js":559,"./Script/Carian.js":560,"./Script/Caucasian_Albanian.js":561,"./Script/Chakma.js":562,"./Script/Cham.js":563,"./Script/Cherokee.js":564,"./Script/Common.js":565,"./Script/Coptic.js":566,"./Script/Cuneiform.js":567,"./Script/Cypriot.js":568,"./Script/Cyrillic.js":569,"./Script/Deseret.js":570,"./Script/Devanagari.js":571,"./Script/Dogra.js":572,"./Script/Duployan.js":573,"./Script/Egyptian_Hieroglyphs.js":574,"./Script/Elbasan.js":575,"./Script/Ethiopic.js":576,"./Script/Georgian.js":577,"./Script/Glagolitic.js":578,"./Script/Gothic.js":579,"./Script/Grantha.js":580,"./Script/Greek.js":581,"./Script/Gujarati.js":582,"./Script/Gunjala_Gondi.js":583,"./Script/Gurmukhi.js":584,"./Script/Han.js":585,"./Script/Hangul.js":586,"./Script/Hanifi_Rohingya.js":587,"./Script/Hanunoo.js":588,"./Script/Hatran.js":589,"./Script/Hebrew.js":590,"./Script/Hiragana.js":591,"./Script/Imperial_Aramaic.js":592,"./Script/Inherited.js":593,"./Script/Inscriptional_Pahlavi.js":594,"./Script/Inscriptional_Parthian.js":595,"./Script/Javanese.js":596,"./Script/Kaithi.js":597,"./Script/Kannada.js":598,"./Script/Katakana.js":599,"./Script/Kayah_Li.js":600,"./Script/Kharoshthi.js":601,"./Script/Khmer.js":602,"./Script/Khojki.js":603,"./Script/Khudawadi.js":604,"./Script/Lao.js":605,"./Script/Latin.js":606,"./Script/Lepcha.js":607,"./Script/Limbu.js":608,"./Script/Linear_A.js":609,"./Script/Linear_B.js":610,"./Script/Lisu.js":611,"./Script/Lycian.js":612,"./Script/Lydian.js":613,"./Script/Mahajani.js":614,"./Script/Makasar.js":615,"./Script/Malayalam.js":616,"./Script/Mandaic.js":617,"./Script/Manichaean.js":618,"./Script/Marchen.js":619,"./Script/Masaram_Gondi.js":620,"./Script/Medefaidrin.js":621,"./Script/Meetei_Mayek.js":622,"./Script/Mende_Kikakui.js":623,"./Script/Meroitic_Cursive.js":624,"./Script/Meroitic_Hieroglyphs.js":625,"./Script/Miao.js":626,"./Script/Modi.js":627,"./Script/Mongolian.js":628,"./Script/Mro.js":629,"./Script/Multani.js":630,"./Script/Myanmar.js":631,"./Script/Nabataean.js":632,"./Script/New_Tai_Lue.js":633,"./Script/Newa.js":634,"./Script/Nko.js":635,"./Script/Nushu.js":636,"./Script/Ogham.js":637,"./Script/Ol_Chiki.js":638,"./Script/Old_Hungarian.js":639,"./Script/Old_Italic.js":640,"./Script/Old_North_Arabian.js":641,"./Script/Old_Permic.js":642,"./Script/Old_Persian.js":643,"./Script/Old_Sogdian.js":644,"./Script/Old_South_Arabian.js":645,"./Script/Old_Turkic.js":646,"./Script/Oriya.js":647,"./Script/Osage.js":648,"./Script/Osmanya.js":649,"./Script/Pahawh_Hmong.js":650,"./Script/Palmyrene.js":651,"./Script/Pau_Cin_Hau.js":652,"./Script/Phags_Pa.js":653,"./Script/Phoenician.js":654,"./Script/Psalter_Pahlavi.js":655,"./Script/Rejang.js":656,"./Script/Runic.js":657,"./Script/Samaritan.js":658,"./Script/Saurashtra.js":659,"./Script/Sharada.js":660,"./Script/Shavian.js":661,"./Script/Siddham.js":662,"./Script/SignWriting.js":663,"./Script/Sinhala.js":664,"./Script/Sogdian.js":665,"./Script/Sora_Sompeng.js":666,"./Script/Soyombo.js":667,"./Script/Sundanese.js":668,"./Script/Syloti_Nagri.js":669,"./Script/Syriac.js":670,"./Script/Tagalog.js":671,"./Script/Tagbanwa.js":672,"./Script/Tai_Le.js":673,"./Script/Tai_Tham.js":674,"./Script/Tai_Viet.js":675,"./Script/Takri.js":676,"./Script/Tamil.js":677,"./Script/Tangut.js":678,"./Script/Telugu.js":679,"./Script/Thaana.js":680,"./Script/Thai.js":681,"./Script/Tibetan.js":682,"./Script/Tifinagh.js":683,"./Script/Tirhuta.js":684,"./Script/Ugaritic.js":685,"./Script/Vai.js":686,"./Script/Warang_Citi.js":687,"./Script/Yi.js":688,"./Script/Zanabazar_Square.js":689,"./Script_Extensions/Adlam.js":690,"./Script_Extensions/Ahom.js":691,"./Script_Extensions/Anatolian_Hieroglyphs.js":692,"./Script_Extensions/Arabic.js":693,"./Script_Extensions/Armenian.js":694,"./Script_Extensions/Avestan.js":695,"./Script_Extensions/Balinese.js":696,"./Script_Extensions/Bamum.js":697,"./Script_Extensions/Bassa_Vah.js":698,"./Script_Extensions/Batak.js":699,"./Script_Extensions/Bengali.js":700,"./Script_Extensions/Bhaiksuki.js":701,"./Script_Extensions/Bopomofo.js":702,"./Script_Extensions/Brahmi.js":703,"./Script_Extensions/Braille.js":704,"./Script_Extensions/Buginese.js":705,"./Script_Extensions/Buhid.js":706,"./Script_Extensions/Canadian_Aboriginal.js":707,"./Script_Extensions/Carian.js":708,"./Script_Extensions/Caucasian_Albanian.js":709,"./Script_Extensions/Chakma.js":710,"./Script_Extensions/Cham.js":711,"./Script_Extensions/Cherokee.js":712,"./Script_Extensions/Common.js":713,"./Script_Extensions/Coptic.js":714,"./Script_Extensions/Cuneiform.js":715,"./Script_Extensions/Cypriot.js":716,"./Script_Extensions/Cyrillic.js":717,"./Script_Extensions/Deseret.js":718,"./Script_Extensions/Devanagari.js":719,"./Script_Extensions/Dogra.js":720,"./Script_Extensions/Duployan.js":721,"./Script_Extensions/Egyptian_Hieroglyphs.js":722,"./Script_Extensions/Elbasan.js":723,"./Script_Extensions/Ethiopic.js":724,"./Script_Extensions/Georgian.js":725,"./Script_Extensions/Glagolitic.js":726,"./Script_Extensions/Gothic.js":727,"./Script_Extensions/Grantha.js":728,"./Script_Extensions/Greek.js":729,"./Script_Extensions/Gujarati.js":730,"./Script_Extensions/Gunjala_Gondi.js":731,"./Script_Extensions/Gurmukhi.js":732,"./Script_Extensions/Han.js":733,"./Script_Extensions/Hangul.js":734,"./Script_Extensions/Hanifi_Rohingya.js":735,"./Script_Extensions/Hanunoo.js":736,"./Script_Extensions/Hatran.js":737,"./Script_Extensions/Hebrew.js":738,"./Script_Extensions/Hiragana.js":739,"./Script_Extensions/Imperial_Aramaic.js":740,"./Script_Extensions/Inherited.js":741,"./Script_Extensions/Inscriptional_Pahlavi.js":742,"./Script_Extensions/Inscriptional_Parthian.js":743,"./Script_Extensions/Javanese.js":744,"./Script_Extensions/Kaithi.js":745,"./Script_Extensions/Kannada.js":746,"./Script_Extensions/Katakana.js":747,"./Script_Extensions/Kayah_Li.js":748,"./Script_Extensions/Kharoshthi.js":749,"./Script_Extensions/Khmer.js":750,"./Script_Extensions/Khojki.js":751,"./Script_Extensions/Khudawadi.js":752,"./Script_Extensions/Lao.js":753,"./Script_Extensions/Latin.js":754,"./Script_Extensions/Lepcha.js":755,"./Script_Extensions/Limbu.js":756,"./Script_Extensions/Linear_A.js":757,"./Script_Extensions/Linear_B.js":758,"./Script_Extensions/Lisu.js":759,"./Script_Extensions/Lycian.js":760,"./Script_Extensions/Lydian.js":761,"./Script_Extensions/Mahajani.js":762,"./Script_Extensions/Makasar.js":763,"./Script_Extensions/Malayalam.js":764,"./Script_Extensions/Mandaic.js":765,"./Script_Extensions/Manichaean.js":766,"./Script_Extensions/Marchen.js":767,"./Script_Extensions/Masaram_Gondi.js":768,"./Script_Extensions/Medefaidrin.js":769,"./Script_Extensions/Meetei_Mayek.js":770,"./Script_Extensions/Mende_Kikakui.js":771,"./Script_Extensions/Meroitic_Cursive.js":772,"./Script_Extensions/Meroitic_Hieroglyphs.js":773,"./Script_Extensions/Miao.js":774,"./Script_Extensions/Modi.js":775,"./Script_Extensions/Mongolian.js":776,"./Script_Extensions/Mro.js":777,"./Script_Extensions/Multani.js":778,"./Script_Extensions/Myanmar.js":779,"./Script_Extensions/Nabataean.js":780,"./Script_Extensions/New_Tai_Lue.js":781,"./Script_Extensions/Newa.js":782,"./Script_Extensions/Nko.js":783,"./Script_Extensions/Nushu.js":784,"./Script_Extensions/Ogham.js":785,"./Script_Extensions/Ol_Chiki.js":786,"./Script_Extensions/Old_Hungarian.js":787,"./Script_Extensions/Old_Italic.js":788,"./Script_Extensions/Old_North_Arabian.js":789,"./Script_Extensions/Old_Permic.js":790,"./Script_Extensions/Old_Persian.js":791,"./Script_Extensions/Old_Sogdian.js":792,"./Script_Extensions/Old_South_Arabian.js":793,"./Script_Extensions/Old_Turkic.js":794,"./Script_Extensions/Oriya.js":795,"./Script_Extensions/Osage.js":796,"./Script_Extensions/Osmanya.js":797,"./Script_Extensions/Pahawh_Hmong.js":798,"./Script_Extensions/Palmyrene.js":799,"./Script_Extensions/Pau_Cin_Hau.js":800,"./Script_Extensions/Phags_Pa.js":801,"./Script_Extensions/Phoenician.js":802,"./Script_Extensions/Psalter_Pahlavi.js":803,"./Script_Extensions/Rejang.js":804,"./Script_Extensions/Runic.js":805,"./Script_Extensions/Samaritan.js":806,"./Script_Extensions/Saurashtra.js":807,"./Script_Extensions/Sharada.js":808,"./Script_Extensions/Shavian.js":809,"./Script_Extensions/Siddham.js":810,"./Script_Extensions/SignWriting.js":811,"./Script_Extensions/Sinhala.js":812,"./Script_Extensions/Sogdian.js":813,"./Script_Extensions/Sora_Sompeng.js":814,"./Script_Extensions/Soyombo.js":815,"./Script_Extensions/Sundanese.js":816,"./Script_Extensions/Syloti_Nagri.js":817,"./Script_Extensions/Syriac.js":818,"./Script_Extensions/Tagalog.js":819,"./Script_Extensions/Tagbanwa.js":820,"./Script_Extensions/Tai_Le.js":821,"./Script_Extensions/Tai_Tham.js":822,"./Script_Extensions/Tai_Viet.js":823,"./Script_Extensions/Takri.js":824,"./Script_Extensions/Tamil.js":825,"./Script_Extensions/Tangut.js":826,"./Script_Extensions/Telugu.js":827,"./Script_Extensions/Thaana.js":828,"./Script_Extensions/Thai.js":829,"./Script_Extensions/Tibetan.js":830,"./Script_Extensions/Tifinagh.js":831,"./Script_Extensions/Tirhuta.js":832,"./Script_Extensions/Ugaritic.js":833,"./Script_Extensions/Vai.js":834,"./Script_Extensions/Warang_Citi.js":835,"./Script_Extensions/Yi.js":836,"./Script_Extensions/Zanabazar_Square.js":837,"./index.js":838,"./unicode-version.js":839};function s(t){var e=n(t);return r(e)}function n(t){if(!r.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id=450},873:function(t,e,r){var i={"./about-the-course.md":[881,4],"./history.md":[882,5],"./language-features/arrays.md":[883,6],"./language-features/async-await.md":[884,7],"./language-features/classes.md":[885,8],"./language-features/conditionals.md":[886,9],"./language-features/error-handling.md":[887,10],"./language-features/functions.md":[888,11],"./language-features/index.md":[889,12],"./language-features/json.md":[890,13],"./language-features/language-structure.md":[891,14],"./language-features/loops.md":[892,15],"./language-features/modules.md":[893,16],"./language-features/numbers-and-math.md":[894,17],"./language-features/objects.md":[895,18],"./language-features/operators.md":[896,19],"./language-features/prototypes.md":[897,20],"./language-features/scopes.md":[898,21],"./language-features/strings.md":[899,22],"./language-features/types.md":[900,23],"./language-features/variables.md":[901,24],"./npm.md":[902,25],"./reading-materials.md":[903,26]};function s(t){if(!r.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],s=e[0];return r.e(e[1]).then((function(){return r.t(s,7)}))}s.keys=function(){return Object.keys(i)},s.id=873,t.exports=s},879:function(t,e,r){"use strict";r.r(e);r(237);var i=r(2),s=r.n(i),n=r(43),a=r.n(n),o=r(211),c=r(212),p=r.n(c),j=r(909),_=r(234),S=r(912),l=r(910),u=r(76),g=r(907),y=r(908),E=r(213),x=r.n(E);r(255),r(256);var m={theme:x()({primary:"#1F2022",secondary:"#CECECE",tertiary:"#03A9FC",quartenary:"white"},{primary:"Montserrat",secondary:"Helvetica"}),progress:"bar",transition:["slide"],transitionDuration:200},d=function(t){var e=t.slides;t.startingAt;return s.a.createElement(g.a,m,e&&Object(y.a)(e))},h=function(t){var e=t.match,i=e&&e.params.section||null,n=e&&e.params.topic||"about-the-course",a=i?"".concat(i,"/").concat(n):n,o=s.a.useState(),c=Object(u.a)(o,2),p=c[0],j=c[1];return s.a.useEffect((function(){n&&r(873)("./".concat(a,".md")).catch((function(t){return r.e(3).then(r.t.bind(null,913,7))})).then((function(t){return fetch(t.default).then((function(t){return t.text()}))})).then((function(t){j(t),document.title="INF310: ".concat(n);var e=window.location.hash.length<2?"#/0":window.location.hash;window.location.hash=e}))}),[n]),s.a.createElement(d,{key:n,slides:p})},C=r(911),f=[{link:"/about-the-course/",text:"About the course"},{link:"/reading-materials/",text:"Additinal reading materials"},{link:"/history/",text:"Short history of JavaScript"},{divider:!0,text:"Week 1 - Language Features"},{link:"/language-features/language-structure/",text:"Language structure"},{link:"/language-features/variables/",text:"Variables"},{link:"/language-features/operators/",text:"Operators"},{link:"/language-features/conditionals/",text:"Conditionals"},{link:"/language-features/error-handling/",text:"Error handling"},{link:"/language-features/types/",text:"Types"},{link:"/language-features/numbers-and-math/",text:"Numbers and Math"},{link:"/language-features/strings/",text:"Strings"},{link:"/language-features/objects/",text:"Objects"},{link:"/language-features/functions/",text:"Functions"},{link:"/language-features/arrays/",text:"Arrays"},{link:"/language-features/json/",text:"JSON"},{link:"/language-features/prototypes/",text:"Prototypes"},{link:"/language-features/classes/",text:"Classes"},{link:"/language-features/scopes/",text:"Scopes"},{link:"/language-features/modules/",text:"Modules"},{link:"/language-features/async-await/",text:"Async/Await"}],P=function(t){return function(e,r){return r.pathname==="".concat(t)}},B=function(t){var e=t.toggle;return s.a.createElement("span",{role:"img","aria-label":"menu",className:"menu_button",onClick:e},s.a.createElement("img",{alt:"js logo",width:"50px",src:"/images/js-icon.png"}),s.a.createElement("span",{className:"menu_title"},"INF310: Modern JS"))},k=function(){var t=s.a.useState(!1),e=Object(u.a)(t,2),r=e[0],i=e[1],n=s.a.useCallback((function(){return i(!r)}),[r]),a=s.a.useCallback((function(){return i(!1)}),[]),o=s.a.useRef(),c=s.a.useRef();return s.a.useEffect((function(){r&&(c.current.scrollTop=c.current.scrollHeight)}),[r]),s.a.useEffect((function(){var t=function(t){o.current&&!o.current.contains(t.target)&&i(!1)};return document.body.addEventListener("click",t),function(){document.body.removeEventListener("click",t)}}),[]),s.a.createElement("aside",{className:"menu",ref:o},s.a.createElement(B,{toggle:n}),r&&s.a.createElement("ul",{className:"menu_list",ref:c},f.map((function(t){var e=t.link,r=t.text;return t.divider?s.a.createElement("li",{key:r,className:"menu_divider"},r):s.a.createElement("li",{key:e},s.a.createElement(C.a,{to:e,isActive:P(e),onClick:a,activeClassName:"menu_active_item"},r))}))))};r(875),r(876);a.a.render(s.a.createElement(o.AppContainer,{errorReporter:function(t){var e=t.error;return s.a.createElement(p.a,{error:e})}},s.a.createElement((function(){return s.a.createElement(j.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(_.a,{component:k}),s.a.createElement(S.a,null,s.a.createElement(_.a,{path:"/:section?/:topic",component:h}),s.a.createElement(l.a,{exact:!0,from:"/",to:"/about-the-course/"}))))}),null)),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.a97471ee.chunk.js.map