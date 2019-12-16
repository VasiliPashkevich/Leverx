function onPrepareUpdate(ev){
    ev.preventDefault();
  
    if (document.getElementById("ultrabook").checked) {
      var link = "http://localhost:2403/ultrabook/";
  
      var elemU = document.createElement("div"),
      before = document.getElementById("frequency"); 
      elemU.setAttribute('class', 'form-group');
      elemU.id="uprocessorType"; 
       
      before.parentNode.insertBefore(elem, before);
    
      //document.getElementById("uprocessorType").innerHTML = "";
  
        var labU = document.createElement("label");
        labU.setAttribute('for', 'cprocessorType');
        labU.innerText = "Type of processor";
    
        var inpU = document.createElement("input");
        inpU.setAttribute('type', 'text');
        inpU.setAttribute('class', 'form-control');
        inpU.setAttribute('id', 'upprocessorType');
        inpU.setAttribute('placeholder', 'Enter type');
     
      elemU.appendChild(labU);
      elemU.appendChild(inpU);
  
      
      elem.appendChild(elemU);  
      }
  
      else if((document.getElementById("server").checked)) {
        var link = "http://localhost:2403/server/";
  
        var elemS = document.createElement("div"),
      before = document.getElementById("frequency"); 
    elemS.setAttribute('class', 'form-group');
    elemS.id="show_input"; 
  
    elem.id = "element";
      before.parentNode.insertBefore(elem, before);
    
      //document.getElementById("element").innerHTML = "";
  
      var labS = document.createElement("label");
       labS.setAttribute('for', 'uparchitectureBitDepth');
       labS.innerText = "Architecture bit depth";
      
  
      var inpS = document.createElement("input");
      inpS.setAttribute('type', 'text');
      inpS.setAttribute('class', 'form-control');
      inpS.setAttribute('id', 'uparchitectureBitDepth');
      inpS.setAttribute('placeholder', 'Enter length');
    
  
    elemS.appendChild(labS);
    elemS.appendChild(inpS);
  
    elem.appendChild(elemS);
      }
  
  
    xhrids = new XMLHttpRequest();
    xhrids.withCredentials = true;
  
    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.response);
            result=JSON.parse(this.response);
            var ids=document.createElement('select');
            ids.className='form-control';
            result.map(function(nthCPU){
                var id=document.createElement('option');
                id.innerHTML=nthCPU['id'];
                ids.appendChild(id);
            });
            var form=document.getElementById('uid').parentElement;
            form.replaceChild(ids,document.getElementById('uid'));
            ids.id='uid';
        }
    });
    xhrids.open("GET", link);
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
  }
  
  
  function onUpdate(ev) {
    ev.preventDefault();
  
  
    if (document.getElementById("ultrabook").checked) {
      var link = "http://localhost:2403/ultrabook/";
  
  
      var data = JSON.stringify({
        "manufacturer": String(document.getElementById("cmanufacturer").value),
        "frequency": String(document.getElementById("cfrequency").value),
        "numberOfCores": String(document.getElementById("cnumberOfCores").value),
        "ramSizeAndType": String(document.getElementById("cramSizeAndType").value), 
        "processorType": String(document.getElementById('cprocessorType').value)
      });
      }
  
      else if((document.getElementById("server").checked)) {
        var link = "http://localhost:2403/server/";
        var data = JSON.stringify({
            "manufacturer": String(document.getElementById("cmanufacturer").value),
            "frequency": String(document.getElementById("cfrequency").value),
            "numberOfCores": String(document.getElementById("cnumberOfCores").value),
            "ramSizeAndType": String(document.getElementById("cramSizeAndType").value), 
            "architectureBitDepth": String(document.getElementById('carchitectureBitDepth').value)
        });
      }
  
    console.log(data);
    xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
  
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
  
    xhr.open("PUT", link+document.getElementById("uid").value);
    xhr.setRequestHeader("Content-Type", "application/json");
    console.log(document.getElementById("uid").value);
    xhr.send(data);
  }