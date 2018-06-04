var config = {
	container : "#basic-example",

	connectors : {
		type : 'step'
	},
	node : {
		HTMLclass : 'nodeExample1'
	}
}, ceo = {
	text : {
		name : "Board Of Director",
		title : "",
		contact : "Tel: 01 213 123 134",
	},

},

cto = {
	parent : ceo,
	text : {
		name : "CEO Leadership Team",
		title : "",
	},
	stackChildren : true,

}, cbo = {
	parent : cto,
	stackChildren : true,
	text : {
		name : "Opeartional",
		title : "",
	},

}, cdo = {
	parent : cto,
	stackChildren : true,
	text : {
		name : "Marketing",
		title : "",
		contact : "Tel: 01 213 123 134",
	},

}, cio = {
	parent : cto,
	stackChildren : true,
	text : {
		name : "Human Resource",
		title : ""
	},

}, ciso = {
	parent : cto,
	stackChildren : true,
	text : {
		name : "Technical",
		title : "",

	},

}, cisoo = {
	parent : cto,
	stackChildren : true,
	text : {
		name : "Customer Service",
		title : "",

	},

}, cio21 = {
	parent : cdo,
	HTMLclass : 'grey',
	text : {
		name : "Sales",
		title : ""
	},

}, cio22 = {
	parent : cdo,
	HTMLclass : 'grey',
	text : {
		name : "Digital Marketing",
		title : ""
	},

}, cio23 = {
	parent : cdo,
	HTMLclass : 'grey',
	text : {
		name : "Branding",
		HTMLclass : 'grey',
		title : ""
	},

}, cio1 = {
	parent : cio,
	HTMLclass : 'grey',
	text : {
		name : "Payroll",
		title : ""
	},

}, cio2 = {
	parent : cio,
	HTMLclass : 'grey',
	text : {
		name : "Training",
		title : ""
	},

}, cio3 = {
	parent : cio,
	HTMLclass : 'grey',
	text : {
		name : "Recruitment",
		title : ""
	},

}, ciso1 = {
	parent : ciso,
	HTMLclass : 'grey',
	text : {
		name : "Development",
		title : ""
	},

}, ciso2 = {
	parent : ciso,
	HTMLclass : 'grey',
	text : {
		name : "Networking",
		title : ""
	},

}, ciso3 = {
	parent : ciso,
	HTMLclass : 'grey',
	text : {
		name : "Testing",
		title : ""
	},

}, cisoo1 = {
	parent : cisoo,
	HTMLclass : 'grey',
	text : {
		name : "Voice",
		title : ""
	},

}, cisoo2 = {
		HTMLclass : 'grey',
		parent : cisoo,
	text : {
		name : "Chat",
		title : ""
	},

}, cisoo3 = {
		HTMLclass : 'grey',
	parent : cisoo,
	text : {
		name : "Email",
		title : ""
	},

},

chart_config = [ config, ceo, cto, cbo, cdo, cio, ciso, cisoo, cio21, cio22,
		cio23, cio1, cio2, cio3, ciso1, ciso2, ciso3,cisoo1,cisoo2,cisoo3 ];

// Antoher approach, same result
// JSON approach

/*
 * var chart_config = { chart: { container: "#basic-example",
 * 
 * connectors: { type: 'step' }, node: { HTMLclass: 'nodeExample1' } },
 * nodeStructure: { text: { name: "Mark Hill", title: "Chief executive officer",
 * contact: "Tel: 01 213 123 134", }, image: "../headshots/2.jpg", children: [ {
 * text:{ name: "Joe Linux", title: "Chief Technology Officer", },
 * stackChildren: true, image: "../headshots/1.jpg", children: [ { text:{ name:
 * "Ron Blomquist", title: "Chief Information Security Officer" }, image:
 * "../headshots/8.jpg" }, { text:{ name: "Michael Rubin", title: "Chief
 * Innovation Officer", contact: "we@aregreat.com" }, image:
 * "../headshots/9.jpg" } ] }, { stackChildren: true, text:{ name: "Linda May",
 * title: "Chief Business Officer", }, image: "../headshots/5.jpg", children: [ {
 * parent: cbo, text:{ name: "Alice Lopez", title: "Chief Communications
 * Officer" }, image: "../headshots/7.jpg" }, { text:{ name: "Mary Johnson",
 * title: "Chief Brand Officer" }, image: "../headshots/4.jpg" }, { text:{ name:
 * "Kirk Douglas", title: "Chief Business Development Officer" }, image:
 * "../headshots/11.jpg" } ] }, { text:{ name: "John Green", title: "Chief
 * accounting officer", contact: "Tel: 01 213 123 134", }, image:
 * "../headshots/6.jpg", children: [ { text:{ name: "Erica Reel", title: "Chief
 * Customer Officer" }, link: { href: "http://www.google.com" }, image:
 * "../headshots/10.jpg" } ] } ] } };
 * 
 */