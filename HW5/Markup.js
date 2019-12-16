var divContainer = document.createElement('div');
divContainer.className = "container";

document.body.append(divContainer);

var divPositionBoot = document.createElement('div');
divPositionBoot.className = "row justify-content-md-center";
divContainer.appendChild(divPositionBoot);

var defDivCard_body = document.createElement('div');
defDivCard_body.className = "card-body";

var formCreate = document.createElement('form');
formCreate.id = "createForm";
defDivCard_body.appendChild(formCreate);

var divFormGroup = document.createElement('div');
divFormGroup.className = "form-group";
formCreate.appendChild(divFormGroup);

var labelDef = document.createElement('label');
labelDef.className = 'row';
labelDef.for = "cvariety";
labelDef.innerHTML = "DEF";
divFormGroup.appendChild(labelDef);

var divInputText = document.createElement('div');
divInputText.className = "text_radio";

var inputUltrabook = document.createElement('input');
inputUltrabook.className = "radio-inline";
inputUltrabook.type = "radio";
inputUltrabook.id = "ultrabook";
inputUltrabook.name = "drone";
inputUltrabook.value = "ultrabook";

var lableUltrabook = document.createElement('label');
lableUltrabook.className ='ultrabook';
lableUltrabook.for = "ultrabook";
lableUltrabook.innerHTML = "Ultrabook";

divFormGroup.appendChild(inputUltrabook);
divFormGroup.appendChild(lableUltrabook);

var inputServer = document.createElement('input');
inputServer.className = "radio-inline";
inputServer.type = "radio";
inputServer.id = "server";
inputServer.name = "drone";
inputServer.value = "server";

var lableServer = document.createElement('label');
lableServer.className = 'server';
lableServer.for = "server";
lableServer.innerHTML = "Server";

divFormGroup.appendChild(inputServer);
divFormGroup.appendChild(lableServer);

var divAccordion = document.createElement('div');
divAccordion.className = "accordion";
divAccordion.id = "accordionExample";
formCreate.appendChild(divAccordion);

var divCard = document.createElement('div');
divCard.className = "card";
divAccordion.appendChild(divCard);

var divCard_header = document.createElement('div');
divCard_header.className = "card-header";
divCard_header.id = "headingOne";
divCard.appendChild(divCard_header);

var h_5 = document.createElement('h5');
h_5.className = "mb-0";
divCard_header.appendChild(h_5);

var btnCreate = document.createElement('button');
btnCreate.className = "btn btn-link";
btnCreate.type = "button";
btnCreate.id = "pcbutton";
btnCreate.setAttribute('data-toggle', "collapse");
btnCreate.setAttribute('data-target', "#collapseOne");
btnCreate.setAttribute('aria-expanded', "true");
btnCreate.setAttribute('aria-controls', "collapseOne");
btnCreate.innerHTML="Create";
h_5.appendChild(btnCreate);

var divCollapseOne = document.createElement('div');
divCollapseOne.className = "collapse";
divCollapseOne.id = "collapseOne";
divCollapseOne.setAttribute('aria-labelledby', "headingOne");
divCollapseOne.setAttribute('data-parent', "#accordionExample");
divCard.appendChild(divCollapseOne);

var divCreateCard_body = document.createElement('div');
divCreateCard_body.className ="card-body";
divCollapseOne.appendChild(divCreateCard_body);

var divForm_groupU = document.createElement('div');
divForm_groupU.className = "form-group";
divCreateCard_body.appendChild(divForm_groupU);

var lableCNumberOfCores = document.createElement('lable');
lableCNumberOfCores.setAttribute('for', 'cnumberOfCores');
lableCNumberOfCores.innerHTML = "Number of processor cores";
divForm_groupU.appendChild(lableCNumberOfCores);

var inputCNumberOfCores = document.createElement('input');
inputCNumberOfCores.className = 'form-control';
inputCNumberOfCores.type = 'text';
inputCNumberOfCores.id = 'cnumberOfCores';
inputCNumberOfCores.placeholder = 'Enter number of processor cores';
divForm_groupU.appendChild(inputCNumberOfCores);

var divForm_groupU = document.createElement('div');
divForm_groupU.className = "form-group";
divCreateCard_body.appendChild(divForm_groupU);

var lableCFrequency = document.createElement('lable');
lableCFrequency.setAttribute('for', 'cfrequency');
lableCFrequency.innerHTML = "Frequency";
divForm_groupU.appendChild(lableCFrequency);

var lableCFrequency = document.createElement('input');
lableCFrequency.className = 'form-control';
lableCFrequency.type = 'text';
lableCFrequency.id = 'cfrequency';
lableCFrequency.placeholder = 'Enter processor frequency';
divForm_groupU.appendChild(lableCFrequency);

var divForm_groupU = document.createElement('div');
divForm_groupU.className = "form-group";
divCreateCard_body.appendChild(divForm_groupU);

var lableCRamSizeAndType = document.createElement('lable');
lableCRamSizeAndType.setAttribute('for', 'cramSizeAndType');
lableCRamSizeAndType.innerHTML = "RAM size and type";
divForm_groupU.appendChild(lableCRamSizeAndType);

var lableCRamSizeAndType = document.createElement('input');
lableCRamSizeAndType.className = 'form-control';
lableCRamSizeAndType.type = 'text';
lableCRamSizeAndType.id = 'cramSizeAndType';
lableCRamSizeAndType.placeholder = 'Enter RAM size and type';
divForm_groupU.appendChild(lableCRamSizeAndType);

var divForm_groupU = document.createElement('div');
divForm_groupU.className = "form-group";
divCreateCard_body.appendChild(divForm_groupU);

var lableCManufacturer = document.createElement('lable');
lableCManufacturer.setAttribute('for', 'cmanufacturer');
lableCManufacturer.innerHTML = "Manufacturer";
lableCManufacturer.id = "before";
divForm_groupU.appendChild(lableCManufacturer);

var lableCManufacturer = document.createElement('input');
lableCManufacturer.className = 'form-control';
lableCManufacturer.type = 'text';
lableCManufacturer.id = 'cmanufacturer';
lableCManufacturer.placeholder = 'Enter manufacturer';
divForm_groupU.appendChild(lableCManufacturer);

var buttonCSubmit = document.createElement('button');
buttonCSubmit.type = 'submit';
buttonCSubmit.id = 'cbutton';
buttonCSubmit.className = 'btn btn-primary';
buttonCSubmit.innerHTML = "Submit";
divCreateCard_body.appendChild(buttonCSubmit);

var divRCard = document.createElement('div');
divRCard.className = "card";
divAccordion.appendChild(divRCard);

var divRCard_header = document.createElement('div');
divRCard_header.className = "card-header";
divRCard_header.id = "headingTwo";
divRCard.appendChild(divRCard_header);

var h_5 = document.createElement('h5');
h_5.className = "mb-0";
divRCard_header.appendChild(h_5);

var btnRead = document.createElement('button');
btnRead.className = "btn btn-link";
btnRead.type = "button";
btnRead.id = "rbutton";
btnRead.setAttribute('data-toggle', "collapse");
btnRead.setAttribute('data-target', "#collapseTwo");
btnRead.setAttribute('aria-expanded', "true");
btnRead.setAttribute('aria-controls', "collapseTwo");
btnRead.innerHTML="Read";
h_5.appendChild(btnRead);

var divCollapseTwo = document.createElement('div');
divCollapseTwo.className = "collapse";
divCollapseTwo.id = "collapseTwo";
divCollapseTwo.setAttribute('aria-labelledby', "headingTwo");
divCollapseTwo.setAttribute('data-parent', "#accordionExample");
divRCard.appendChild(divCollapseTwo);

var divReadCard_body = document.createElement('div');
divReadCard_body.className ="card-body";
divCollapseTwo.appendChild(divReadCard_body);

var tableR = document.createElement('table');
tableR.className = 'table';
divReadCard_body.appendChild(tableR);

var theadR = document.createElement('thead');
tableR.appendChild(theadR);

var trR = document.createElement('tr');
trR.id = 'table_id';
theadR.appendChild(trR);

var thRTableId = document.createElement('th');
thRTableId.scope = 'col';
thRTableId.innerHTML = "ID";
trR.appendChild(thRTableId);

var thRTableNumberOfCores = document.createElement('th');
thRTableNumberOfCores.scope = 'col';
thRTableNumberOfCores.innerHTML = "Number of cores";
trR.appendChild(thRTableNumberOfCores);

var thRTableFrequency = document.createElement('th');
thRTableFrequency.scope = 'col';
thRTableFrequency.innerHTML = "Frequency";
trR.appendChild(thRTableFrequency);

var thRTableRamSizeAndType = document.createElement('th');
thRTableRamSizeAndType.scope = 'col';
thRTableRamSizeAndType.innerHTML = "RAM size and type";
trR.appendChild(thRTableRamSizeAndType);

var thRTableManufacturer = document.createElement('th');
thRTableManufacturer.scope = 'col';
thRTableManufacturer.innerHTML = "Manufacturer";
trR.appendChild(thRTableManufacturer);

var thRTableDef = document.createElement('th');
thRTableDef.scope = 'col';
trR.appendChild(thRTableDef);


var tbodyTable = document.createElement('tbody');
tbodyTable.id = 'rTBody';
tableR.appendChild(tbodyTable);

var divUCard = document.createElement('div');
divUCard.className = "card";
divAccordion.appendChild(divUCard);

var divUCard_header = document.createElement('div');
divUCard_header.className = "card-header";
divUCard_header.id = "headingThree";
divUCard.appendChild(divUCard_header);

var h_5U = document.createElement('h5');
h_5U.className = "mb-0";
divUCard_header.appendChild(h_5U);

var btnUpdate = document.createElement('button');
btnUpdate.className = "btn btn-link";
btnUpdate.type = "button";
btnUpdate.id = "pubutton";
btnUpdate.setAttribute('data-toggle', "collapse");
btnUpdate.setAttribute('data-target', "#collapseThree");
btnUpdate.setAttribute('aria-expanded', "true");
btnUpdate.setAttribute('aria-controls', "collapseThree");
btnUpdate.innerHTML="Update";
h_5U.appendChild(btnUpdate);

var divCollapseThree = document.createElement('div');
divCollapseThree.className = "collapse";
divCollapseThree.id = "collapseThree";
divCollapseThree.setAttribute('aria-labelledby', "headingThree");
divCollapseThree.setAttribute('data-parent', "#accordionExample");
divUCard.appendChild(divCollapseThree);

var divUpdateCard_body = document.createElement('div');
divUpdateCard_body.className ="card-body";
divCollapseThree.appendChild(divUpdateCard_body);

var formUpdate = document.createElement('form');
formUpdate.id = 'updateForm';
divUpdateCard_body.appendChild(formUpdate);

var divFormGroupId = document.createElement('div');
divFormGroupId.className = 'form-group';
formUpdate.appendChild(divFormGroupId);

var lableId = document.createElement('lable');
lableId.setAttribute('for', 'uid');
lableId.innerHTML ='Id';
divFormGroupId.appendChild(lableId);

var selectId = document.createElement('select');
selectId.id = 'uid';
selectId.className = 'form-control'; 
divFormGroupId.appendChild(selectId);

var divFormGroupNumberOfCores = document.createElement('div');
divFormGroupNumberOfCores.className = 'form-group';
formUpdate.appendChild(divFormGroupNumberOfCores);

var lableUNumberOfCores = document.createElement('lable');
lableUNumberOfCores.setAttribute('for', 'unumberOfCores');
lableUNumberOfCores.innerHTML ='Number of processor cores';
divFormGroupNumberOfCores.appendChild(lableUNumberOfCores);

var inputUNumberOfCores = document.createElement('input');
inputUNumberOfCores.type = 'text';
inputUNumberOfCores.className = 'form-control';
inputUNumberOfCores.id = 'unumberOfCores';
inputUNumberOfCores.placeholder = 'Enter number of processor cores';
divFormGroupNumberOfCores.appendChild(inputUNumberOfCores);


var divFormGroupFrequency = document.createElement('div');
divFormGroupFrequency.className = 'form-group';
formUpdate.appendChild(divFormGroupFrequency);

var lableUFrequency = document.createElement('lable');
lableUFrequency.setAttribute('for', 'ufield');
lableUFrequency.innerHTML ='Firequency';
divFormGroupFrequency.appendChild(lableUFrequency);

var inputUFrequency = document.createElement('input');
inputUFrequency.type = 'text';
inputUFrequency.className = 'form-control';
inputUFrequency.id = 'ufrequency';
inputUFrequency.placeholder = 'Enter processor frequency';
divFormGroupFrequency.appendChild(inputUFrequency);

var divFormGroupRamSizeAndType = document.createElement('div');
divFormGroupRamSizeAndType.className = 'form-group';
formUpdate.appendChild(divFormGroupRamSizeAndType);

var lableURamSizeAndType = document.createElement('lable');
lableURamSizeAndType.setAttribute('for', 'uramSizeAndType');
lableURamSizeAndType.innerHTML ='RAM size and type';
divFormGroupRamSizeAndType.appendChild(lableURamSizeAndType);

var inputURamSizeAndType = document.createElement('input');
inputURamSizeAndType.type = 'text';
inputURamSizeAndType.className = 'form-control';
inputURamSizeAndType.id = 'uramSizeAndType';
inputURamSizeAndType.placeholder = 'Enter RAM size and type';
divFormGroupRamSizeAndType.appendChild(inputURamSizeAndType);

var divFormGroupManufacturer = document.createElement('div');
divFormGroupManufacturer.className = 'form-group';
formUpdate.appendChild(divFormGroupManufacturer);

var lableUManufacturer = document.createElement('lable');
lableUManufacturer.setAttribute('for', 'umanufacturer');
lableUManufacturer.innerHTML ='Manufacturer';
divFormGroupManufacturer.appendChild(lableUManufacturer);

var inputUManufacturer = document.createElement('input');
inputUManufacturer.type = 'text';
inputUManufacturer.className = 'form-control';
inputUManufacturer.id = 'umanufacturer';
inputUManufacturer.placeholder = 'Enter manufacturer';
divFormGroupManufacturer.appendChild(inputUManufacturer);

var buttonUSubmit = document.createElement('button');
buttonUSubmit.type = 'submit';
buttonUSubmit.id = 'ubutton';
buttonUSubmit.className = 'btn btn-primary';
buttonUSubmit.innerHTML = "Submit";
formUpdate.appendChild(buttonUSubmit);

var divDCard = document.createElement('div');
divDCard.className = "card";
divAccordion.appendChild(divDCard);

var divDCard_header = document.createElement('div');
divDCard_header.className = "card-header";
divDCard_header.id = "headingFour";
divDCard.appendChild(divDCard_header);

var h_5D = document.createElement('h5');
h_5D.className = "mb-0";
divDCard_header.appendChild(h_5D);

var btnDelete = document.createElement('button');
btnDelete.className = "btn btn-link";
btnDelete.type = "button";
btnDelete.id = "pdbutton";
btnDelete.setAttribute('data-toggle', "collapse");
btnDelete.setAttribute('data-target', "#collapseFour");
btnDelete.setAttribute('aria-expanded', "true");
btnDelete.setAttribute('aria-controls', "collapseFour");
btnDelete.innerHTML="Delete";
h_5D.appendChild(btnDelete);

var divCollapseFour = document.createElement('div');
divCollapseFour.className = "collapse";
divCollapseFour.id = "collapseFour";
divCollapseFour.setAttribute('aria-labelledby', "headingFour");
divCollapseFour.setAttribute('data-parent', "#accordionExample");
divDCard.appendChild(divCollapseFour);

var divDeleteCard_body = document.createElement('div');
divDeleteCard_body.className ="card-body";
divCollapseFour.appendChild(divDeleteCard_body);

var formDelete = document.createElement('form');
formDelete.id = 'deleteForm'; 
divDeleteCard_body.appendChild(formDelete);

var divFormGroupDId = document.createElement('div');
divFormGroupDId.className = 'form-group';
formDelete.appendChild(divFormGroupDId);

var lableDelete = document.createElement('lable');
lableDelete.setAttribute('for', 'did');
lableDelete.innerHTML ='Id';
divFormGroupDId.appendChild(lableDelete);

var selectDelete = document.createElement('select');
selectDelete.id ='did';
selectDelete.className = 'form-control';
divFormGroupDId.appendChild(selectDelete);

var buttonDSubmit = document.createElement('button');
buttonDSubmit.type = 'submit';
buttonDSubmit.id ='dbutton';
buttonDSubmit.className ='btn btn-primary';
buttonDSubmit.innerHTML ='Submit';
divDeleteCard_body.appendChild(buttonDSubmit);

divPositionBoot.appendChild(defDivCard_body);
defDivCard_body.appendChild(divAccordion);


