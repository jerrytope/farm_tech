var state_arr = new Array("Abia State","Adamawa State","Akwa Ibom State","Anambra State","Bauchi State","Bayelsa State","Benue State","Borno State","Cross River State","Delta State","Ebonyi State","Edo State","Ekiti State","Enugu State","Federal Capital Territory Abuja","Gombe State","Imo State","Jigawa State","Kaduna State","Kano State","Katsina State","Kebbi State","Kogi State","Kwara State","Lagos State","Nasarawa State","Niger State","Ogun State","Ondo State","Osun State","Oyo State","Plateau State","Rivers State","Sokoto State","Taraba State","Yobe State","Zamfara State");

var s_a = new Array();
s_a[0]="";
s_a[1]=" Umuahia | Aba |  Amaeke |  Arochukwu |  Ohafia |  Alayi |  Isuikwuato|  Abiriba|  Ndi Elu Nkporo|  Umukabia|  Osisioma Ngwa|  Aba North|  Eluoma|  Umuahia South|  Ugwunagbo|  Umuahia North|  Isiala-Ngwa North|  Ukwa West|  Aba South|  Isiala-Ngwa South|  Amawom|  Nkpa|  Elemaga|  Ikwuano|  Ukwa East|  Ubakala|  Ovukwu|  Ozu Abam|  Obi Nwga|  Azumini|  Ndoro|  Obinkita|  Owerrinta|  Umu-Nneochi|  Agbala|  Igbere ";
s_a[2]=" Demsa | Fufure  | Ganye  | Gayuk  | Gombi  | Grie  | Hong  | Jada  | Larmurde  | Madagali  | Maiha  | Mayo Belwa  | Michika  | Mubi North  | Mubi South  | Numan  | Shelleng  | Song  | Toungo  | Yola North  | Yola Sout ";
s_a[3]= " Abak | Eastern Obolo | Eket | Esit Eket | Essien Udim | Etim Ekpo | Etinan | Ibeno | Ibesikpo Asutan | Ibiono-Ibom | Ika | Ikono | Ikot Abasi | Ikot Ekpene | Ini | Itu | Mbo | Mkpat-Enin | Nsit-Atai | Nsit-Ibom | Nsit-Ubium | Obot Akara | Okobo | Onna | Oron | Oruk Anam | Udung-Uko | Ukanafun | Uruan | Urue-Offong Oruko | Uyo";
s_a[4]= " Aguata | Anambra East | Anambra West | Anaocha | Awka North | Awka South | Ayamelum | Dunukofia | Ekwusigo | Idemili North | Idemili South | Ihiala | Njikoka | Nnewi North | Nnewi South | Ogbaru | Onitsha North | Onitsha South | Orumba North | Orumba South | Oyi ";
s_a[5] = "  Alkaleri | Bauchi | Bogoro | Damban | Darazo | Dass | Gamawa | Ganjuwa | Giade | Itas-Gadau | Jama re | Katagum | Kirfi | Misau | Ningi | Shira | Tafawa alewa | Toro | Warji | Zaki ";
s_a[6] = " Brass | Ekeremor | Kolokuma Opokuma | Nembe | Ogbia | Sagbama | Southern Ijaw | Yenago";
s_a[7] = "  Agatu |  Apa |  Ado |  Buruku |  Gboko |  Guma |  Gwer East |  Gwer West |  Katsina-Ala |  Konshisha |  Kwande |  Logo |  Makurdi |  Obi |  Ogbadibo |  Ohimini |  Oju |  Okpokwu |  Oturkpo |  Tarka |  Ukum |  Ushongo |  Vandeiky | ";
s_a[8] = "  Abadam |  Askira-Uba |  Bama |  Bayo |  Biu |  Chibok |  Damboa |  Dikwa |  Gubio |  Guzamala |  Gwoza |  Hawul |  Jere |  Kaga |  Kala-Balge |  Konduga |  Kukawa |  Kwaya Kusar |  Mafa |  Magumeri |  Maiduguri |  Marte |  Mobbar |  Monguno |  Ngala |  Nganzai |  Shan | ";
s_a[9] =  "  Abi |  Akamkpa |  Akpabuyo |  Bakassi |  Bekwarra |  Biase |  Boki |  Calabar Municipal |  Calabar South |  Etung |  Ikom |  Obanliku |  Obubra |  Obudu |  Odukpani |  Ogoja |  Yakuur |  Yal | ";
s_a[10] = "  Aniocha North |  Aniocha South |  Bomadi |  Burutu |  Ethiope East |  Ethiope West |  Ika North East |  Ika South |  Isoko North |  Isoko South |  Ndokwa East |  Ndokwa West |  Okpe |  Oshimili North |  Oshimili South |  Patani |  Sapele |  Udu |  Ughelli North |  Ughelli South |  Ukwuani |  Uvwie |  Warri North |  Warri South |  Warri South Wes ";
s_a[11] = " Abakaliki |  Afikpo North |  Afikpo South |  Ebonyi |  Ezza North |  Ezza South |  Ikwo |  Ishielu |  Ivo |  Izzi |  Ohaozara |  Ohaukwu |  Onich  ";
s_a[12] = "Akoko-Edo | Egor | Esan Central | Esan North-East | Esan South-East | Esan West | Etsako Central | Etsako East | Etsako West | Igueben | Ikpoba Okha | Orhionmwon | Oredo | Ovia North-East | Ovia South-West | Owan East | Owan West | Uhunmwond ";
s_a[13] = "Ado Ekiti | Efon | Ekiti East | Ekiti South-West | Ekiti West | Emure | Gbonyin | Ido Osi | Ijero | Ikere | Ikole | Ilejemeje | Irepodun-Ifelodun | Ise-Orun | Moba | Oye "
s_a[14] = "Port Harcourt | Obio-Akpor | Okrika | Ogu–Bolo | Eleme | Tai | Gokana | Khana | Oyigbo | Opobo–Nkoro | Andoni | Bonny | Degema | Asari-Toru | Akuku-Toru | Abua–Odual | Ahoada West | Ahoada East | Ogba–Egbema–Ndoni | Emohua | Ikwerre | Etche | Omum ";
s_a[15] = "Aninri | Awgu | Enugu East | Enugu North | Enugu South | Ezeagu | Igbo Etiti | Igbo Eze North | Igbo Eze South | Isi Uzo | Nkanu East | Nkanu West | Nsukka | Oji River | Udenu | Udi | Uzo Uwan ";
s_a[16] = " Abaji | Bwari | Gwagwalada | Kuje | Kwali | Municipal Area Counci ";
s_a[17] = " Akko | Balanga | Billiri | Dukku | Funakaye | Gombe | Kaltungo | Kwami | Nafada | Shongom | Yamaltu-Deb ";




function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
