"use strict";(self.webpackChunkdream_restaurant=self.webpackChunkdream_restaurant||[]).push([[472],{5472:(M,g,r)=>{r.r(g),r.d(g,{CategoryModule:()=>v});var d=r(9808),s=r(2741),m=r(8174),l=r(6323),t=r(1223),u=r(3798),p=r(3458);const y=["items"],f=function(i){return["/p",i]};function h(i,a){if(1&i&&(t.TgZ(0,"a",5),t._UZ(1,"item-card",6),t.qZA()),2&i){const e=a.$implicit;t.Q6J("routerLink",t.VKq(3,f,e.id)),t.xp6(1),t.Q6J("image",e.image)("text",e.name)}}let C=(()=>{class i{constructor(e,n,o){this.dataService=e,this.route=n,this.router=o,this.products=[]}ngOnInit(){this.route.paramMap.subscribe(e=>{const n=Number(e.get("id")),o=this.dataService.categories.find(c=>c.id===n);o?(this.category=o,this.products=this.dataService.products.filter(c=>c.category_id==this.category.id)):this.router.navigate(["/"])})}ngAfterContentInit(){this.items&&(this.items.nativeElement.style.minHeight=35*(this.dataService.categories.length+1)+"px")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.D),t.Y36(s.gz),t.Y36(s.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["category-page"]],viewQuery:function(e,n){if(1&e&&t.Gf(y,7),2&e){let o;t.iGM(o=t.CRH())&&(n.items=o.first)}},decls:5,vars:2,consts:[[1,"category-selector"],[3,"selected"],[1,"items"],["items",""],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],[3,"image","text"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"category-selector",1),t.qZA(),t.TgZ(2,"div",2,3),t.YNc(4,h,2,5,"a",4),t.qZA()),2&e&&(t.xp6(1),t.Q6J("selected",n.category),t.xp6(3),t.Q6J("ngForOf",n.products))},directives:[u.P,d.sg,s.yS,p.E],styles:[".items[_ngcontent-%COMP%]{padding:20px;display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:1em;grid-row-gap:1em}@media screen and (min-width: 576px){.items[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (min-width: 768px){.items[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}@media screen and (min-width: 1024px){.items[_ngcontent-%COMP%]{grid-template-columns:repeat(6,1fr)}}"]}),i})(),v=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.ez,s.Bz.forChild([{path:":id",component:C}]),m.FM,m.Cd]]}),i})()}}]);