var tl = new TimelineMax();

tl.staggerTo($('i'), 3, {scale:3,opacity:0, boxShadow: "0px 0px 50px rgba(255, 255, 255, 1)"},0.7);
tl.to($(".holder"),1,{ backgroundColor: "#fff"})
tl.to($(".imageHolder"),1,{ opacity: 1})