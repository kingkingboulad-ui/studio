let saturate  = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let blurE = document.getElementById("blur")
let huerotate = document.getElementById("hue-rotate")
let grayscale = document.getElementById("grayscale")
let download = document.getElementById("download")
let uplode = document.getElementById("uplode")
let img = document.getElementById("img")
let reset = document.getElementById("reset")
let imgbox = document.querySelector(".img-box")
let invert=document.getElementById("invert")

console.log(imgbox)


function resetvalue(){
    img.style.filter="none"
    saturate.value="100"
    contrast.value="100"
    brightness.value="100"
    sepia.value="0"
    grayscale.value="0"
    grayscale.value="0"
    blurE.value="0"
}



window.onload = () => {
    download.style.display = "none";
    reset.style.display = "none";
    imgbox.style.display = "none";
}


uplode.onchange = function() {
    resetvalue()
    download.style.display = "block";
    reset.style.display = "block";
    imgbox.style.display = "block";

    let file = new FileReader();
    file.readAsDataURL(uplode.files[0])
    file.onload=function(){
        img.src=file.result
    }
   
}

let filters=document.querySelectorAll("ul li input")
console.log(filters)

filters.forEach(fil => {
    fil.addEventListener("input", () => {
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            grayscale(${grayscale.value})
            blur(${blurE.value}px)
            hue-rotate(${huerotate.value}deg)
            sepia(${sepia.value}%)
            invert(${invert.value})
            
        `;
    });
});



download.onclick = () => {
    // إنشاء canvas
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");

    // تحديد أبعاد canvas لتكون مثل الصورة
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // تطبيق الفلاتر على canvas
    ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        grayscale(${grayscale.value})
        blur(${blurE.value}px)
        hue-rotate(${huerotate.value}deg)
        sepia(${sepia.value}%)
    `;

    // رسم الصورة على canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // تحويل canvas إلى رابط تنزيل
    download.href = canvas.toDataURL("image/png");
}