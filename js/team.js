$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

    $("#imgh01")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/staffGif01.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/staffFace01.png");
    });
    $("#imgh02")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/staffGif02.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/staffFace02.png");
    });
    $("#imgh03")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/staffGif03.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/staffFace03.png");
    });
    $("#imgh04")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/staffGif04.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/staffFace04.png");
    });
    $("#imgh05")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/staffGif05.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/staffFace05.png");
    });
    $("#imgh06")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/staffGif06.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/staffFace06.png");
    });
    $("#imgh07")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/staffGif07.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/staffFace07.png");
    });
    $("#imgh08")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/staffGif08.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/staffFace08.png");
    });
    $("#imgh09")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/staffGif09.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/staffFace09.png");
    });
    $("#imgh10")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/xMainGif01.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/xmainFace01.png");
    });
    $("#imgh11")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/xMainGif02.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/xmainFace02.png");
    });
    $("#imgh12")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/xMainGif03.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/xmainFace03.png");
    });
    $("#imgh13")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/xMainGif04.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/xmainFace04.png");
    });
    $("#imgh14")
            .mouseover(function () {
            $(this).attr("src", "img/imgPeople/xMainGif05.gif");
        })
            .mouseout(function () {
            $(this).attr("src", "img/imgPeople/xmainFace05.png");
    });



});