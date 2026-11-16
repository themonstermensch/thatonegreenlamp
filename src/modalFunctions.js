export default function displayInfoTest(id) {

    let imageID = "sngimg-"+id;
    let lampImage = document.getElementById(imageID);
    lampImage.style.filter = "brightness(50%)";
    let infoID = "infoCo-"+ id;
    const info = document.getElementById(infoID);
    info.style.opacity = 1.0;

};

    
