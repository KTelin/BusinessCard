var tabs = Ti.UI.createTabGroup();

var winLand = Ti.UI.createWindow({
	backgroundColor: '#981e32'
});

var tab1 = Ti.UI.createTab({
	title: 'Contact Info',
	window: winLand	
});

var viewLand = Ti.UI.createView({
	backgroundColor: '#5e6a71',
	top: '20%',
	height: '13%'
});

var labelName = Ti.UI.createLabel({
	color: '#000000',
	text: 'Seth Rathbun',
	top: '0%'
});

var labelUni = Ti.UI.createLabel({
	color: '#000000',
	font: { fontSize: '12dp'},
	text: 'University of Idaho',
	top: '33%'
});

var labelMajor = Ti.UI.createLabel({
	color: '#000000',
	font: { fontSize: '12dp'},
	top: '66%',
	text: 'Information Systems'
});

var contactData = [{ title: 'Phone: (208)596-9805', color: '#000000'}, {title:'E-mail: seth.m.rathbun@gmail.com', color: '#000000'}];

var contactTable = Ti.UI.createTableView({
	data: contactData,
	headerTitle: 'Contact Information',
	backgroundColor: '#5e6a71',
	top: '55%',
	height: '20%'
});


var winPort =Ti.UI.createWindow({
	backgroundColor: '#981e32'
});

var tab2 = Ti.UI.createTab({
	title: 'Portfolio',
	window: winPort
});

var viewPort = Ti.UI.createView();

var labelPort = Ti.UI.createLabel({
	font: {fontSize: '14dp'},
	text: 'My name is Seth Rathbun, I am currently a student in the College of Business and Economics at the University of Idaho, where I am majoring in '+
	'Information Systems. I am currently working towards graduating in the Spring semester of 2016 and aim to utilize my degree in the defense industry '+
	'by focusing my education on network security and penetration testing.'
});

viewLand.add(labelName);
viewLand.add(labelUni);
viewLand.add(labelMajor);
winLand.add(viewLand);
winLand.add(contactTable);
viewPort.add(labelPort);
winPort.add(viewPort);
tabs.addTab(tab1);
tabs.addTab(tab2);
tabs.open();
