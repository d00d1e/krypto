(this["webpackJsonpreact-krypto"]=this["webpackJsonpreact-krypto"]||[]).push([[0],{361:function(e,t,c){},363:function(e,t,c){"use strict";c.r(t);var a,s=c(31),n=c.n(s),i=c(37),r=c(44),l=c(7),j=c(14),o=c(118),d=c(46),b={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"b8ebd2fa0fmshf20b4d5d663c50bp1d1fdajsn5f29bca5d557"},h=function(e){return{url:e,headers:b}},u=Object(o.a)({reducerPath:"cryptoApi",baseQuery:Object(d.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return h("/coins?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return h("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timeperiod;return h("coin/".concat(t,"/history/").concat(c))}}),getExchanges:e.query({query:function(){return h("/exchanges")}})}}}),x=u.useGetCryptosQuery,O=u.useGetCryptoDetailsQuery,p=u.useGetCryptoHistoryQuery,m=u.useGetExchangesQuery,v={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"b8ebd2fa0fmshf20b4d5d663c50bp1d1fdajsn5f29bca5d557"},g=Object(o.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(d.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:v}}})}}}),f=g.useGetCryptoNewsQuery,y=Object(j.a)({reducer:(a={},Object(l.a)(a,u.reducerPath,u.reducer),Object(l.a)(a,g.reducerPath,g.reducer),a),middleware:function(e){return e().concat(u.middleware).concat(g.middleware)}}),N=c(0),w=c(32),C=c(367),k=c(369),T=c(376),S=c(6),P=c(373),E=c(213),M=c(375),q=c(377),A=c(378),F=c(379),I=c(380),L=c(381),U=c.p+"static/media/avatar-crypto2.8034b379.png",$=c(2);function D(){var e=Object(N.useState)(!0),t=Object(S.a)(e,2),c=t[0],a=t[1],s=Object(N.useState)(void 0),n=Object(S.a)(s,2),r=n[0],l=n[1];return Object(N.useEffect)((function(){var e=function(){return l(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(N.useEffect)((function(){a(!(r<=800))}),[r]),Object($.jsxs)("div",{className:"nav-container",children:[Object($.jsxs)("div",{className:"logo-container",children:[Object($.jsx)(P.a,{src:U,size:"large"}),Object($.jsx)(k.a.Title,{level:2,className:"logo",children:Object($.jsx)(i.b,{to:"/",children:"Krypto"})}),Object($.jsx)(E.a,{className:"menu-control-container",onClick:function(){return a(!c)},children:Object($.jsx)(q.a,{})})]}),c&&Object($.jsxs)(M.a,{theme:"dark",className:"menu",children:[Object($.jsx)(M.a.Item,{icon:Object($.jsx)(A.a,{}),children:Object($.jsx)(i.b,{to:"/",children:"Home"})},"1"),Object($.jsx)(M.a.Item,{icon:Object($.jsx)(F.a,{}),children:Object($.jsx)(i.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})},"2"),Object($.jsx)(M.a.Item,{icon:Object($.jsx)(I.a,{}),children:Object($.jsx)(i.b,{to:"/exchanges",children:"Exchanges"})},"3"),Object($.jsx)(M.a.Item,{icon:Object($.jsx)(L.a,{}),children:Object($.jsx)(i.b,{to:"/news",children:"News"})},"4")]})]})}var Q=c(36),V=c.n(Q),G=c(98),H=c(59),R=c(370),z=c(366),W=c(365);function J(){return Object($.jsx)("div",{className:"loader",children:Object($.jsx)(W.a,{})})}function K(){var e,t=x(10),c=t.data,a=t.isFetching,s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return a?Object($.jsx)(J,{}):Object($.jsxs)($.Fragment,{children:[Object($.jsx)(k.a.Title,{level:2,className:"heading",children:"Global Crypto Stats"}),Object($.jsxs)(G.a,{children:[Object($.jsx)(H.a,{span:12,children:Object($.jsx)(R.a,{title:"Total Cryptocurrencies",value:s.total})}),Object($.jsx)(H.a,{span:12,children:Object($.jsx)(R.a,{title:"Total Exchanges",value:V()(s.totalExchanges)})}),Object($.jsx)(H.a,{span:12,children:Object($.jsx)(R.a,{title:"Total Market Cap:",value:"$".concat(V()(s.totalMarketCap))})}),Object($.jsx)(H.a,{span:12,children:Object($.jsx)(R.a,{title:"Total 24h Volume",value:"$".concat(V()(s.total24hVolume))})}),Object($.jsx)(H.a,{span:12,children:Object($.jsx)(R.a,{title:"Total Markets",value:V()(s.totalMarkets)})})]}),Object($.jsx)(z.a,{}),Object($.jsxs)("div",{className:"home-heading-container",children:[Object($.jsx)(k.a.Title,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies"}),Object($.jsx)(k.a.Title,{level:3,className:"show-more",children:Object($.jsx)(i.b,{to:"/cryptocurrencies",children:"Show More"})})]}),Object($.jsx)(ee,{simplified:!0}),Object($.jsx)(z.a,{}),Object($.jsxs)("div",{className:"home-heading-container",children:[Object($.jsx)(k.a.Title,{level:2,className:"home-title",children:"Latest Crypto News"}),Object($.jsx)(k.a.Title,{level:3,className:"show-more",children:Object($.jsx)(i.b,{to:"/news",children:"Read More"})})]}),Object($.jsx)(xe,{simplified:!0})]})}var Z=c(136),_=c(374);function B(){var e,t=m(),c=t.data,a=t.isFetching,s=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?Object($.jsx)(J,{}):Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(G.a,{className:"exchanges-heading",children:[Object($.jsx)(H.a,{span:6,children:"Exchanges"}),Object($.jsx)(H.a,{span:6,children:"24h Trade Window"}),Object($.jsx)(H.a,{span:6,children:"Markets"}),Object($.jsx)(H.a,{span:6,children:"Change"})]}),Object($.jsx)(G.a,{className:"exchanges-table",children:s.map((function(e){return Object($.jsx)(H.a,{span:24,children:Object($.jsx)(_.a,{children:Object($.jsx)(_.a.Panel,{showArrow:!1,header:Object($.jsxs)(G.a,{children:[Object($.jsxs)(H.a,{span:6,children:[Object($.jsx)(k.a.Text,{children:Object($.jsx)("strong",{children:e.rank})}),Object($.jsx)(P.a,{className:"exchanges-img",src:e.iconUrl}),Object($.jsx)(k.a.Text,{children:Object($.jsx)("strong",{children:e.name})})]}),Object($.jsx)(H.a,{span:6,children:V()(e.volume)}),Object($.jsx)(H.a,{span:6,children:V()(e.numberOfMarkets)}),Object($.jsx)(H.a,{span:6,children:V()(e.marketShare)})]}),children:Object(Z.a)(e.description||"")})})},e.uuid)}))})]})}var X=c(372),Y=c(368);function ee(e){var t=e.simplified,c=x(t?10:100),a=c.data,s=c.isFetching,n=Object(N.useState)([]),r=Object(S.a)(n,2),l=r[0],j=r[1],o=Object(N.useState)(""),d=Object(S.a)(o,2),b=d[0],h=d[1];return Object(N.useEffect)((function(){var e,t=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));j(t)}),[a,b]),s?Object($.jsx)(J,{}):Object($.jsxs)($.Fragment,{children:[!t&&Object($.jsx)("div",{className:"search-crypto",children:Object($.jsx)(X.a,{placeholder:"Search Cryptocurrencies",onChange:function(e){return h(e.target.value)}})}),Object($.jsx)(G.a,{gutter:[32,32],className:"crypto-card-container",children:null===l||void 0===l?void 0:l.map((function(e){return Object($.jsx)(H.a,{className:"crypto-card",xs:24,sm:12,lg:6,children:Object($.jsx)(i.b,{to:"/crypto/".concat(e.id),children:Object($.jsxs)(Y.a,{hoverable:!0,title:"".concat(e.rank,". ").concat(e.name),extra:Object($.jsx)("img",{className:"crypo-image",src:e.iconUrl,alt:e.name}),children:[Object($.jsxs)("p",{children:["Price: ",V()(e.price)]}),Object($.jsxs)("p",{children:["Market Cap: ",V()(e.marketCap)]}),Object($.jsxs)("p",{children:["Daily Change: ",V()(e.change)]})]})},e.id)},e.uuid)}))})]})}var te=c(371),ce=c(382),ae=c(383),se=c(384),ne=c(385),ie=c(138),re=c(386),le=c(217),je=c(214);function oe(e){for(var t,c=e.coinHistory,a=e.currentPrice,s=e.coinName,n=[],i=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l?void 0:l.history.length);r++){var l;n.push(c.data.history[r].price),i.push(new Date(c.data.history[r].timestamp).toLocaleDateString())}var j={labels:i,datasets:[{label:"Price in USD",data:n,fill:!1,backgroundColor:"#1890ff",borderColor:"#1890ff"}]};return Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(G.a,{className:"chart-heading",children:[Object($.jsxs)(k.a.Title,{level:2,className:"chart-title",children:[s," Price Chart"]}),Object($.jsxs)(H.a,{className:"price-container",children:[Object($.jsxs)(k.a.Title,{level:5,className:"price-change",children:[null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object($.jsxs)(k.a.Title,{level:5,className:"current-price",children:["Current ",s," Price: $",a]})]})]}),Object($.jsx)(je.a,{data:j,options:{scales:{yAxis:{ticks:{beginAtZero:!0}}}}})]})}function de(){var e,t,c=Object(w.f)().coinId,a=Object(N.useState)("7d"),s=Object(S.a)(a,2),n=s[0],i=s[1],r=O(c),l=r.data,j=r.isFetching,o=p({coinId:c,timeperiod:n}).data,d=null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.coin;if(j)return Object($.jsx)(J,{});var b=[{title:"Price to USD",value:"$ ".concat(d.price&&V()(d.price)),icon:Object($.jsx)(ce.a,{})},{title:"Rank",value:d.rank,icon:Object($.jsx)(ae.a,{})},{title:"24h Volume",value:"$ ".concat(d.volume&&V()(d.volume)),icon:Object($.jsx)(se.a,{})},{title:"Market Cap",value:"$ ".concat(d.marketCap&&V()(d.marketCap)),icon:Object($.jsx)(ce.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(V()(d.allTimeHigh.price)),icon:Object($.jsx)(ne.a,{})}],h=[{title:"Number Of Markets",value:d.numberOfMarkets,icon:Object($.jsx)(F.a,{})},{title:"Number Of Exchanges",value:d.numberOfExchanges,icon:Object($.jsx)(I.a,{})},{title:"Aprroved Supply",value:d.approvedSupply?Object($.jsx)(ie.a,{}):Object($.jsx)(re.a,{}),icon:Object($.jsx)(le.a,{})},{title:"Total Supply",value:"$ ".concat(V()(d.totalSupply)),icon:Object($.jsx)(le.a,{})},{title:"Circulating Supply",value:"$ ".concat(V()(d.circulatingSupply)),icon:Object($.jsx)(le.a,{})}];return Object($.jsxs)(H.a,{className:"coin-detail-container",children:[Object($.jsxs)(H.a,{className:"coin-heading-container",children:[Object($.jsxs)(k.a.Title,{level:2,className:"coin-name",children:[d.name," (",d.slug,") Price"]}),Object($.jsxs)("p",{children:[d.name," live price in US dollars. View value statistics, market cap and supply."]}),Object($.jsx)(z.a,{})]}),Object($.jsx)(te.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return i(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e,t){return Object($.jsx)(te.a.Option,{children:e},e+t)}))}),Object($.jsx)(oe,{coinHistory:o,currentPrice:V()(d.price),coinName:d.name}),Object($.jsx)(z.a,{}),Object($.jsxs)(H.a,{className:"stats-container",children:[Object($.jsxs)(H.a,{className:"coin-value-statistics",children:[Object($.jsxs)(H.a,{className:"coin-value-statistics-heading",children:[Object($.jsxs)(k.a.Title,{level:3,className:"coin-details-heading",children:[d.name," Value Statistics"]}),Object($.jsxs)("p",{children:["Stat Overview of ",d.name]})]}),b.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object($.jsxs)(H.a,{className:"coin-stats",children:[Object($.jsxs)(H.a,{className:"coin-stats-name",children:[Object($.jsx)(k.a.Text,{children:t}),Object($.jsx)(k.a.Text,{children:c})]}),Object($.jsx)(k.a.Text,{className:"stats",children:a})]},c)}))]}),Object($.jsxs)(H.a,{className:"other-stats-info",children:[Object($.jsxs)(H.a,{className:"coin-value-statistics-heading",children:[Object($.jsx)(k.a.Title,{level:3,className:"coin-details-heading",children:"Other Statistics"}),Object($.jsx)("p",{children:"Stat Overview of all cryptocurrencies"})]}),h.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object($.jsxs)(H.a,{className:"coin-stats",children:[Object($.jsxs)(H.a,{className:"coin-stats-name",children:[Object($.jsx)(k.a.Text,{children:t}),Object($.jsx)(k.a.Text,{children:c})]}),Object($.jsx)(k.a.Text,{className:"stats",children:a})]},c)}))]})]}),Object($.jsx)(z.a,{}),Object($.jsxs)(H.a,{className:"coin-desc-link",children:[Object($.jsxs)(G.a,{className:"coin-desc",children:[Object($.jsxs)(k.a.Title,{level:3,className:"coin-details-heading",children:["What is ",d.name,"?"]}),Object(Z.a)(d.description)]}),Object($.jsxs)(H.a,{className:"coin-links",children:[Object($.jsxs)(k.a.Title,{level:3,className:"coin-details-heading",children:[d.name," Links"]}),null===(t=d.links)||void 0===t?void 0:t.map((function(e){return Object($.jsxs)(G.a,{className:"coin-link",children:[Object($.jsx)(k.a.Title,{level:5,className:"link-name",children:e.type}),Object($.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name+e.type)}))]})]})]})}var be=c(210),he=c.n(be),ue="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";function xe(e){var t,c,a=e.simplified,s=Object(N.useState)("Cryptocurrency"),n=Object(S.a)(s,2),i=n[0],r=n[1],l=x(100).data,j=f({newsCategory:i,count:a?6:12}).data;return(null===j||void 0===j?void 0:j.value)?Object($.jsxs)(G.a,{gutter:[24,24],children:[!a&&Object($.jsx)(H.a,{span:24,children:Object($.jsxs)(te.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return r(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object($.jsx)(te.a.Option,{value:"Cryptocurrency",children:"All Cryptos"}),null===l||void 0===l||null===(t=l.data)||void 0===t||null===(c=t.coins)||void 0===c?void 0:c.map((function(e,t){return Object($.jsx)(te.a.Option,{value:e.name,children:e.name},t)}))]})}),j.value.map((function(e,t){var c,a,s,n,i,r;return Object($.jsx)(H.a,{xs:24,sm:12,lg:8,children:Object($.jsx)(Y.a,{hoverable:!0,className:"news-card",children:Object($.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object($.jsxs)("div",{className:"news-image-container",children:[Object($.jsx)(k.a.Title,{className:"news-title",level:4,children:e.name}),Object($.jsx)("img",{src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||ue,alt:""})]}),Object($.jsx)("p",{children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object($.jsx)(z.a,{}),Object($.jsxs)("div",{className:"provider-container",children:[Object($.jsxs)("div",{children:[Object($.jsx)(P.a,{src:(null===(s=e.provider[0])||void 0===s||null===(n=s.image)||void 0===n||null===(i=n.thumbnail)||void 0===i?void 0:i.contentUrl)||ue,alt:""}),Object($.jsx)(k.a.Text,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object($.jsx)(k.a.Text,{className:"provider-date",children:he()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object($.jsx)(J,{})}c(361);function Oe(){return Object($.jsxs)("div",{className:"app",children:[Object($.jsx)("div",{className:"navbar",children:Object($.jsx)(D,{})}),Object($.jsx)("div",{className:"main",children:Object($.jsx)(C.a,{children:Object($.jsx)("div",{className:"routes",children:Object($.jsxs)(w.c,{children:[Object($.jsx)(w.a,{exact:!0,path:"/",component:K}),Object($.jsx)(w.a,{exact:!0,path:"/exchanges",component:B}),Object($.jsx)(w.a,{exact:!0,path:"/cryptocurrencies",component:ee}),Object($.jsx)(w.a,{exact:!0,path:"/crypto/:coinId",component:de}),Object($.jsx)(w.a,{exact:!0,path:"/news",component:xe})]})})})}),Object($.jsxs)("div",{className:"footer",children:[Object($.jsx)(k.a.Title,{level:4,style:{color:"white",textAlign:"center"},children:Object($.jsx)(i.b,{to:"/",className:"footer-logo",children:"Krypto"})}),Object($.jsxs)(k.a.Text,{level:5,style:{color:"gray",textAlign:"center"},children:["Copyright \xa9 2021",Object($.jsx)("br",{}),"All Rights Reserved."]}),Object($.jsxs)(T.b,{children:[Object($.jsx)(i.b,{to:"/",children:"Home"})," | ",Object($.jsx)(i.b,{to:"/exchanges",children:"Exchanges"})," |",Object($.jsx)(i.b,{to:"/news",children:"News"})]})]})]})}c(362);n.a.render(Object($.jsx)(i.a,{children:Object($.jsx)(r.a,{store:y,children:Object($.jsx)(Oe,{})})}),document.getElementById("root"))}},[[363,1,2]]]);
//# sourceMappingURL=main.334936d1.chunk.js.map