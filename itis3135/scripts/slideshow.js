var numberUp = 0;

window.onload = function()
{
    main1Up();
};

function allDown()
{
    document.getElementById("main1").style.display = "none";
    document.getElementById("main2").style.display = "none";
    document.getElementById("main3").style.display = "none";
    document.getElementById("main4").style.display = "none";
    document.getElementById("main5").style.display = "none";
    document.getElementById("main6").style.display = "none";
}

function main1Up()
{
    allDown();
    document.getElementById("main1").style.display = "block";
    numberUp = 1;
}

function main2Up()
{
    allDown();
    document.getElementById("main2").style.display = "block";
    numberUp = 2;
}

function main3Up()
{
    allDown();
    document.getElementById("main3").style.display = "block";
    numberUp = 3;
}

function main4Up()
{
    allDown();
    document.getElementById("main4").style.display = "block";
    numberUp = 4;
}

function main5Up()
{
    allDown();
    document.getElementById("main5").style.display = "block";
    numberUp = 5;
}

function main6Up()
{
    allDown();
    document.getElementById("main6").style.display = "block";
    numberUp = 6;
}


function next()
{
    switch(numberUp+1)
    {
        case 2:
            main2Up();
            break;
        case 3:
            main3Up();
            break;
        case 4:
            main4Up();
            break;
        case 5:
            main5Up();
            break;
        case 6:
            main6Up();
            break;
        case 7:
            main1Up();
            break;
    }
}

function prev()
{
    switch(numberUp-1)
    {
        case 0:
            main6Up();
            break;
        case 1:
            main1Up();
            break;
        case 2:
            main2Up();
            break;
        case 3:
            main3Up();
            break;
        case 4:
            main4Up();
            break;
        case 5:
            main5Up();
            break;
    }
}