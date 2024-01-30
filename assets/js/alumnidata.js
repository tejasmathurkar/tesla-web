var alumni = new Vue({
	el: "#alumniContainer",
	data: {
		setevent: function (id) {
			this.$nextTick(function () {
				console.log(id);
				var box = document.getElementById(id);
				box.addEventListener("mouseenter", () => {
					box.style.opacity = 0.7;
				});
				box.addEventListener("mouseleave", () => {
					box.style.opacity = 0;
				});
			});
		},
		test: function (id) {
			var box = document.getElementById(id);

			if (box.style.opacity > 0.5) box.style.opacity = 0;
			else box.style.opacity = 0.7;
			console.log(box);
		},

		alumniTeam: [
			{
				name: "Jonathan Verghese",
				yearOfPassing: "2014",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Suspension lead, Co-sponsorship head",
				linkedIn: "https://www.linkedin.com/in/jonathan-verghese-731204a0",
				subsystem: "NA",
				currentJob: "Battery Integration Engineer",
				currentCompany: "Rivian",
				currentLocation: "Irvine, California",
				
				image: "jonathanverghese.webp",
			},
			{
				name: "Ajit Radder",
				yearOfPassing: "2014",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Mechanical lead",
				linkedIn: "NA",
				subsystem: "Engine, Brakes, chassis",
				currentJob: "NA",
				currentCompany: "Meritor",
				currentLocation: "Bangalore",
				
				image: "placeholder.webp",
			},
			{
				name: "Sthitapradyna Rasalkar",
				yearOfPassing: "2015",
				USN: "NA",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "CFO, Electrical Design",
				linkedIn: "https://www.linkedin.com/in/sthita/",
				subsystem: "Electrical",
				currentJob: "Manufacturing Engineer",
				currentCompany: "Lightforce Orthodontics",
				currentLocation: "Boston",
				
				image: "sthitapradyna.webp",
			},
			{
				name: "Avinash Joshi",
				yearOfPassing: "2016",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Vehicle Dynamics Lead",
				linkedIn: "www.linkedin.com/in/avinash-g-joshi-3b91687b",
				subsystem: "Chassis",
				currentJob: "Student",
				currentCompany: "XIMB",
				currentLocation: "Bhubaneswar, Odisha",
				
				image: "avinashjoshi.webp",
			},
			{
				name: "Nishchay",
				yearOfPassing: "2016",
				USN: "NA",
				Branch: "Industrial Engineering and Management",
				roleInTeam: "Finance and Sponsorship Head",
				linkedIn: "www.linkedin.com/in/nishchay-singh",
				subsystem: "Drivetrain",
				currentJob: "Student",
				currentCompany: "IIT Bombay",
				currentLocation: "Mumbai",
				
				image: "nischay.webp",
			},
			{
				name: "Akshay Kumar P",
				yearOfPassing: "2017",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Lead Suspension Engineer",
				linkedIn: "NA",
				subsystem: "Vehicle dynamics",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Akshay R",
				yearOfPassing: "2017",
				USN: "NA",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Electrical engineer power electronics",
				linkedIn: "https://www.linkedin.com/in/akshay-r-008a219b",
				subsystem: "Power electronics",
				currentJob: "Electrical engineer",
				currentCompany: "Mbrdi",
				currentLocation: "Bengaluru",
				
				image: "akshayr.webp",
			},
			{
				name: "Sumukha",
				yearOfPassing: "2017",
				USN: "NA",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Electronics Systems Officer",
				linkedIn: "NA",
				subsystem: "BMS and Control",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Ganne Sai Gokul",
				yearOfPassing: "2018",
				USN: "NA",
				Branch: "Computer Science and Engineering",
				roleInTeam: "Vice captain",
				linkedIn: "https://www.linkedin.com/in/ganne-sai-gokul",
				subsystem: "Management & Telemetry",
				currentJob: "Software Engineer",
				currentCompany: "Recko Inc",
				currentLocation: "Bangalore",
				
				image: "ganne.webp",
			},
			{
				name: "Sai Charan",
				yearOfPassing: "2018",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Mech wing - Suspension team",
				linkedIn: "https://www.linkedin.com/in/sai-charan-2377b3104",
				subsystem: "Suspension",
				currentJob: "Business Analyst",
				currentCompany: "Toyota kirloskar motors",
				currentLocation: "Bangalore",
				
				image: "saicharan.webp",
			},
			{
				name: "Niral",
				yearOfPassing: "2018",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "CTO",
				linkedIn: "https://www.linkedin.com/in/niral3007",
				subsystem: "Complete mechanical",
				currentJob: "Student",
				currentCompany: "NITIE",
				currentLocation: "Mumbai",
				
				image: "niral.webp",
			},
			{
				name: "Darshan Gadginmath",
				yearOfPassing: "2018",
				USN: "NA",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "ESO",
				linkedIn: "https://www.linkedin.com/in/darshangadginmath-8b37a5111/",
				subsystem:
					"Electrical subsystem, worked on the BMS, motor and motor controller, wiring, etc.",
				currentJob: "Research assistant at IISc",
				currentCompany: "Indian Institute of Science",
				currentLocation: "Bengaluru",
				
				image: "darshang.webp",
			},
			{
				name: "E R Sumanth",
				yearOfPassing: "2018",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Team Captain",
				linkedIn: "https://www.linkedin.com/in/sumanth-e-r-118572104",
				subsystem: "Brakes",
				currentJob: "Senior officer",
				currentCompany: "Toyota kirloskar motor Pvt Ltd",
				currentLocation: "Banglore",
				
				image: "ersumanth.webp",
			},
			{
				name: "Karthik Sullia",
				yearOfPassing: "2018",
				USN: "1RV14EC068",
				Branch: "ECE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Shivraj kumar",
				yearOfPassing: "2018",
				USN: "1RV14EC143",
				Branch: "ECE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Soubhig Shome",
				yearOfPassing: "2018",
				USN: "1RV14EC159",
				Branch: "ECE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Kiran Ganiger",
				yearOfPassing: "2018",
				USN: "1RV14EE023",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Vikas Anand Jamkhandi",
				yearOfPassing: "2018",
				USN: "1RV14EE059",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/vikas-anand-jamkhandi-6b9032b3/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "vikasj.webp",
			},
			{
				name: "Vishal Kulkarni",
				yearOfPassing: "2018",
				USN: "1RV14EE060",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/vishal-kulkarni-a443a4128/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "vishalkulkarni.webp",
			},
			{
				name: "Aditya K",
				yearOfPassing: "2018",
				USN: "1RV14ME007",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Aditya A",
				yearOfPassing: "2018",
				USN: "1RV14ME008",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Aditya P",
				yearOfPassing: "2018",
				USN: "1RV14ME011",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Akhil Kumar K N",
				yearOfPassing: "2018",
				USN: "1RV14ME013",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Anish Jain D A",
				yearOfPassing: "2018",
				USN: "1RV14ME020",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Jnanashekar Reddy",
				yearOfPassing: "2018",
				USN: "1RV14ME043",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/jnanashekar-reddy-339421133/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "jnanashekar.webp",
			},
			{
				name: "Nikhil paryani",
				yearOfPassing: "2018",
				USN: "1RV14ME060",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "P V Sai tarak",
				yearOfPassing: "2018",
				USN: "1RV14ME065",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Shivanand Vanjire",
				yearOfPassing: "2018",
				USN: "1RV14ME086",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Prajwal K",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Project manager",
				linkedIn: "https://www.linkedin.com/in/prajwal-k-murthy-a5a575114",
				subsystem: "Power train, BMS",
				currentJob: "Self employed",
				currentCompany: "Prakhyath Machine & Machine Tools Pvt.Ltd.",
				currentLocation: "BANGALORE",
				
				image: "prajwalmurthy.webp",
			},
			{
				name: "Chethan K P",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Computer Science and Engineering",
				roleInTeam: "Infotainment subsystem engineer",
				linkedIn: "https://www.linkedin.com/in/chethan-kp-113387146",
				subsystem: "Infotainment",
				currentJob: "NA",
				currentCompany: "Citrix",
				currentLocation: "Bengaluru",
				
				image: "chethankp.webp",
			},
			{
				name: "Rahul Ramaprasad",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Electronics and Communication Engineering",
				roleInTeam: "Infotainment system",
				linkedIn: "https://www.linkedin.com/in/rahul-ramaprasad7/",
				subsystem: "Electrical",
				currentJob: "Masters student",
				currentCompany: "University of Colorado Boulder",
				currentLocation: "Boulder",
				
				image: "rahulrp.webp",
			},
			{
				name: "Rahul Patil",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Computer Science and Engineering",
				roleInTeam: "Infotainment subsystem lead",
				linkedIn: "https://www.linkedin.com/in/rahul-m-patil",
				subsystem: "Infotainment",
				currentJob: "Software Engineer",
				currentCompany: "Cisco systems",
				currentLocation: "Bengaluru",
				
				image: "rahulpatil.webp",
			},
			{
				name: "Swapnil Savaran",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Project Manager",
				linkedIn: "www.linkedin.com/in/swapnilsavarn",
				subsystem: "Static Events, Management, Sponsorship",
				currentJob: "Business Analyst",
				currentCompany: "Box8",
				currentLocation: "Mumbai",
				
				image: "swapnilsavaran.webp",
			},
			{
				name: "Anshuman B V",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Electrical head and ESO",
				linkedIn: "https://www.linkedin.com/in/anshumanbv",
				subsystem: "Power train, bms, safety circuits",
				currentJob: "Design Engineer",
				currentCompany: "Agni Motors",
				currentLocation: "Bengaluru",
				
				image: "anshuman.webp",
			},
			{
				name: "Prakyath Poojary",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Vice captain",
				linkedIn: "https://www.linkedin.com/in/prakyath-poojary-b43ba7136",
				subsystem: "Powertrain,brakes, suspension",
				currentJob: "Pursuing masters",
				currentCompany: "NA",
				
				image: "prakyathp.webp",
			},
			{
				name: "Srujan S R",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "E-Wing member",
				linkedIn: "NA",
				subsystem: "Wiring, Safety Circuits",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
			
				image: "srujan.webp",
			},
			{
				name: "Nikhil B Bhat",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Power train",
				linkedIn: "https://www.linkedin.com/in/nikhil-b-bhat-79647b154",
				subsystem: "Power train",
				currentJob: "Design engineer",
				currentCompany: "Inteva products",
				currentLocation: "Bangalore",
				
				image: "nikhilbhat.webp",
			},
			{
				name: "Vishal F Aralikatti",
				yearOfPassing: "2019",
				USN: "NA",
				Branch: "Electronics and Communication Engineering",
				roleInTeam: "Electronics Engineer",
				linkedIn: "NA",
				subsystem: "Electronics",
				currentJob: "R&D Engineer",
				currentCompany: "Synopsys",
				currentLocation: "Bangalore",
				
				image: "vishalFA.webp",
			},
			{
				name: "Nithin H K",
				yearOfPassing: "2019",
				USN: "1RV15CS102",
				Branch: "CSE",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/nithin-h-k-486569114/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "nithinhk.webp",
			},
			{
				name: "Sanket Salankimatt",
				yearOfPassing: "2019",
				USN: "1RV15CS139",
				Branch: "CSE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
			
				image: "placeholder.webp",
			},
			{
				name: "Nishchal Manjanbail",
				yearOfPassing: "2019",
				USN: "1RV15EC096",
				Branch: "ECE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Santosh Hossale",
				yearOfPassing: "2019",
				USN: "1RV15EC128",
				Branch: "ECE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Swaroop",
				yearOfPassing: "2019",
				USN: "1RV15EC165",
				Branch: "ECE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
			
				image: "placeholder.webp",
			},
			{
				name: "Vinayak Kulkarni",
				yearOfPassing: "2019",
				USN: "1RV15EC185",
				Branch: "ECE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
			
				image: "placeholder.webp",
			},
			{
				name: "Vishal A",
				yearOfPassing: "2019",
				USN: "1RV15EC186",
				Branch: "ECE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Akhil L",
				yearOfPassing: "2019",
				USN: "1RV15EE006",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Amrut Patil",
				yearOfPassing: "2019",
				USN: "1RV15EE007",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Ashwin Kumar A",
				yearOfPassing: "2019",
				USN: "1RV15EE012",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Jayanth Bhargav",
				yearOfPassing: "2019",
				USN: "1RV15EE025",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "P V Rohith",
				yearOfPassing: "2019",
				USN: "1RV15EE038",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Prajwal R",
				yearOfPassing: "2019",
				USN: "1RV15EE041",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Shrikesh S",
				yearOfPassing: "2019",
				USN: "1RV15EE052",
				Branch: "EEE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Aditya Arora",
				yearOfPassing: "2019",
				USN: "1RV15ME008",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Anshul Navik",
				yearOfPassing: "2019",
				USN: "1RV15ME020",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Arun Rathod",
				yearOfPassing: "2019",
				USN: "1RV15ME021",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Mallina Sandeep Chowdary",
				yearOfPassing: "2019",
				USN: "1RV15ME055",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
			
				image: "placeholder.webp",
			},
			{
				name: "Raviteja S J",
				yearOfPassing: "2019",
				USN: "1RV15ME084",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Sagar Mishra",
				yearOfPassing: "2019",
				USN: "1RV15ME092",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/sagar-mishra-085b71130/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "sagarmishra.webp",
			},
			{
				name: "Sarvottam Bathwal",
				yearOfPassing: "2019",
				USN: "1RV15ME096",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Vagish Mishra",
				yearOfPassing: "2019",
				USN: "1RV15ME119",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Basavaraj meti",
				yearOfPassing: "2019",
				USN: "1RV15ME402",
				Branch: "MECH",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Praneeth Lanka",
				yearOfPassing: "2020",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Project Manager - Technical",
				linkedIn: "https://www.linkedin.com/in/praneeth-l-0b1211b0/",
				subsystem: "Suspension",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "praneethlanka.webp",
			},
			{
				name: "Venkatesh S",
				yearOfPassing: "2020",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Team captain",
				linkedIn: "https://www.linkedin.com/in/venkatesh-sathish-86276b145",
				subsystem: "Chassis, Accumulator, powertrain",
				currentJob: "Engineering Intern",
				currentCompany: "Lam research",
				currentLocation: "Bengaluru",
				
				image: "venkatesh.webp",
			},
			{
				name: "Mushtaq Ahmed",
				yearOfPassing: "2020",
				USN: "NA",
				Branch: "Electronics and Communication Engineering",
				roleInTeam: "Project Manager ( Management )",
				linkedIn: "NA",
				subsystem: "Sponsorship",
				currentJob: "Software Developer",
				currentCompany: "ANSYS Inc",
				currentLocation: "Bangalore",
			
				image: "mushtaq_sheikh.webp",
			},
			{
				name: "Mahimashree",
				yearOfPassing: "2020",
				USN: "NA",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "Technical support engineer",
				linkedIn: "https://www.linkedin.com/in/mahimashree-p-916710138",
				subsystem: "Safety circuits and powertrain",
				currentJob: "Mechatronics engineer",
				currentCompany: "Jiva Sciences",
				currentLocation: "Bengaluru",
				
				image: "mahimashree.webp",
			},
			{
				name: "Akshaya Kumar Joish",
				yearOfPassing: "2020",
				USN: "NA",
				Branch: "Computer Science and Engineering",
				roleInTeam: "Infotainment subsystem head",
				linkedIn: "https://www.linkedin.com/in/akshaya-kumar-joish-586857144",
				subsystem: "Infotainment, safety circuits",
				currentJob: "Software developer",
				currentCompany: "Cisco",
				currentLocation: "Bangalore",
				
				image: "akj.webp",
			},
			{
				name: "Chiranjeevi N",
				yearOfPassing: "2020",
				USN: "NA",
				Branch: "Electronics and Communication Engineering",
				roleInTeam: "Safety circuits lead and ESO",
				linkedIn: "http://linkedin.com/in/chiranjeevi-n-380bba132",
				subsystem: "Safety circuits",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "chiranjeevi.webp",
			},
			{
				name: "Praveer Prakash",
				yearOfPassing: "2020",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Brakes design",
				linkedIn: "https://www.linkedin.com/in/praveer-prakash-065675131/",
				subsystem: "Brakes",
				currentJob: "NA",
				currentCompany: "NA",
				
				image: "praveer.webp",
			},
			{
				name: "Sree Siddhant",
				yearOfPassing: "2020",
				USN: "NA",
				Branch: "Mechanical Engineering",
				roleInTeam: "Suspension design engineer",
				linkedIn: "https://www.linkedin.com/in/sree-siddhant-b11447159",
				subsystem: "Suspension",
				currentJob: "GET",
				currentCompany: "Collins Aerospace",
				currentLocation: "Bengaluru",
				
				image: "sreesiddhant.webp",
			},
			{
				name: "Ashad Farhan",
				yearOfPassing: "NA",
				USN: "NA",
				Branch: "Electrical and Electronics Engineering",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/ashad-farhan-b3a9187b/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "ashad.webp",
			},
			{
				name: "Aniketh Satyanarayana",
				yearOfPassing: "NA",
				USN: "NA",
				Branch: "Mechanical",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/aniketh-satyanarayana-17640880/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "anikethsatya.webp",
			},
			{
				name: "Prasanna P Kulkarni",
				yearOfPassing: "NA",
				USN: "NA",
				Branch: "Mechanical",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Anoop Anand",
				yearOfPassing: "NA",
				USN: "NA",
				Branch: "CSE",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/anoop-anand-1b552ab1/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "anoop.webp",
			},
			{
				name: "Revanur Ambareesh",
				yearOfPassing: "NA",
				USN: "NA",
				Branch: "CSE",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/ambareeshr",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "revanur.webp",
			},
			{
				name: "Santosh S Shiradon",
				yearOfPassing: "NA",
				USN: "NA",
				Branch: "CSE",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/anoop-anand-1b552ab1/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Shashank Hegade",
				yearOfPassing: "NA",
				USN: "NA",
				Branch: "CSE",
				roleInTeam: "NA",
				linkedIn: "NA",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "placeholder.webp",
			},
			{
				name: "Dheeraj Prasanna",
				yearOfPassing: "NA",
				USN: "NA",
				Branch: "ECE",
				roleInTeam: "NA",
				linkedIn: "https://www.linkedin.com/in/dheeraj-prasanna-166385112/",
				subsystem: "NA",
				currentJob: "NA",
				currentCompany: "NA",
				currentLocation: "NA",
				
				image: "dheerajp.webp",
			},
			{
				name: "Abhishek Hobalidar",
				yearofPassing: "NA",
				USN: "NA",

				Branch: "Mechanical",
				roleInTeam: "Head of Sponsorship",
				linkedIn: "http://www.linkedin.com/in/abhishek-hobalidar-45102632",
				subsystem: "NA",
				currentJob: "Design Engineer",
				currentCompany: "L&T Technology Services Limited",
				currentLocation: "Mysore, Karnataka",
				
				image: "abhishekh.webp",
			}
		],
	},
});
