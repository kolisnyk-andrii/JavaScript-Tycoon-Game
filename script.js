'use strict'


let clicker = 0;
let multy2x = false;
let multy3x = false;
let multy6x = false;

const jazz = new Audio("jazz.mp3");

function addClicker(multy)
{
    clicker += multy;
    document.querySelector(".counter").textContent = clicker;
}

// Clicker logic
document.querySelector(".clicker").addEventListener("click", function()
{
    if (clicker >= 999)
    {
        document.querySelector(".counter").classList.add("fontSizeSmall");
    }

    if (multy2x === false && multy3x === false && multy6x == false)
    {
        addClicker(1);
    }
    else if (multy2x === true)
    {
        addClicker(2);
    }
    else if (multy3x === true)
    {
        addClicker(3);
    }
    else if (multy6x === true)
    {
        addClicker(6);
    }
});

// Buy logic

document.querySelector(".sound").addEventListener("click", function()
{
    if (clicker >= 10)
    {
        clicker -= 10;
        document.querySelector(".counter").textContent = clicker;
        document.querySelector(".sound").classList.add("hidden");
        jazz.play();
    }
});

document.querySelector(".b2x").addEventListener("click", function()
{
    if (clicker >= 100)
    {
        clicker -= 100;
        document.querySelector(".counter").textContent = clicker;
        document.querySelector(".b2x").classList.add("hidden");

        multy2x = true;
        multy3x = false;
        multy6x = false;
    }
});

document.querySelector(".b3x").addEventListener("click", function()
{
    if (clicker >= 250)
    {
        clicker -= 250;
        document.querySelector(".counter").textContent = clicker;
        document.querySelector(".b2x").classList.add("hidden");
        document.querySelector(".b3x").classList.add("hidden");
        
        multy2x = false;
        multy3x = true;
        multy6x = false;
    }
});

document.querySelector(".b6x").addEventListener("click", function()
{
    if (clicker >= 600)
    {
        clicker -= 600;
        document.querySelector(".counter").textContent = clicker;
        document.querySelector(".b2x").classList.add("hidden");
        document.querySelector(".b3x").classList.add("hidden");
        document.querySelector(".b6x").classList.add("hidden");
        
        multy2x = false;
        multy3x = false;
        multy6x = true;
    }
});

document.querySelector(".win").addEventListener("click", function()
{
    if (clicker >= 1000)
    {
        clicker -= 1000;
        document.querySelector(".counter").textContent = clicker;
        document.querySelector(".win").classList.add("hidden");
        
        document.querySelector(".titleTycoon").textContent = "🎉✨ You Win ✨🎉";
    }
});