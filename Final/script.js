// JavaScript code for handling page functionality
// Ensure you have included JQuery library before this script

// JSON object containing party colors
let data_201;
let data_2019 = {};
let bars;
const initialView = [23, 82.5];
const initialZoom = 5;
let state_value = 36;
let sym = {
  extra:"./imgs/notknown.svg",
  IND: "./imgs/IND.svg",
  BJP: "./imgs/BJP.webp",
  INC: "./imgs/INC.svg",
  DMK: "./imgs/DMK.webp",
  YSRCP: "./imgs/YSRCP.jpeg",
  AITC: "./imgs/AITC.png",
  SHS: "./imgs/SHS.png",
  "JD(U)": "./imgs/JD(U).png",
  BJD: "./imgs/BJD.png",
  BSP: "./imgs/BSP.jpg",
  TRS: "./imgs/TRS.jpg",
  BRS: "./imgs/BRS.jpg",
  LJP: "./imgs/LJP.jpg",
  NCP: "./imgs/NCP.webp",
  SP: "./imgs/SP.jpg",
  TDP: "./imgs/TDP.webp",
  JKN: "./imgs/JKN.webp",
  IUML: "./imgs/IUML.jpg",
  CPIM: "./imgs/CPIM.png",
  AIMIM: "./imgs/AIMIM.png",
  SAD: "./imgs/SAD.webp",
  CPI: "./imgs/CPI.webp",
  ADAL: "./imgs/ADAL.webp",
  AIUDF: "./imgs/AIUDF.png",
  JMM: "./imgs/JMM.png",
  AJSUP: "./imgs/AJSUP.jpg",
  "JD(S)": "./imgs/JD(S).jpg",
  "KEC(M)": "./imgs/KEC(M).webp",
  "Andaman & Nicobar Islands": "./imgs/Andaman_&_Nicobar_Islands.jpg",
  "Andhra Pradesh": "./imgs/Andhra_Pradesh.webp",
  "Arunachal Pradesh": "./imgs/Arunachal_Pradesh.jpg",
  Assam: "./imgs/Assam.jpg",
  Bihar: "./imgs/Bihar.jpg",
  Chandigarh: "./imgs/Chandigarh.png",
  Chhattisgarh: "./imgs/Chhattisgarh.jpg",
  "Dadra & Nagar Haveli": "./imgs/Dadra_&_Nagar_Haveli.png",
  "Daman & Diu": "./imgs/Daman_&_Diu.jpg",
  Goa: "./imgs/Goa.jpg",
  Gujarat: "./imgs/Gujarat.jpg",
  Haryana: "./imgs/Haryana.jpg",
  "Himachal Pradesh": "./imgs/Himachal_Pradesh.jpg",
  "Jammu & Kashmir": "./imgs/Jammu_&_Kashmir.jpg",
  Jharkhand: "./imgs/Jharkhand.jpg",
  Karnataka: "./imgs/Karnataka.jpg",
  Kerala: "./imgs/Kerala.jpg",
  Lakshadweep: "./imgs/Lakshadweep.gif",
  "Madhya Pradesh": "./imgs/Madhya_Pradesh.jpg",
  Maharashtra: "./imgs/Maharashtra.jpg",
  Manipur: "./imgs/Manipur.jpg",
  Meghalaya: "./imgs/Meghalaya.jpg",
  Mizoram: "./imgs/Mizoram.png",
  Nagaland: "./imgs/Nagaland.png",
  "NCT OF Delhi": "./imgs/NCT_OF_Delhi.jpeg",
  Odisha: "./imgs/Odisha.png",
  Puducherry: "./imgs/Puducherry.png",
  Punjab: "./imgs/Punjab.jpg",
  Rajasthan: "./imgs/Rajasthan.png",
  Sikkim: "./imgs/Sikkim.png",
  "Tamil Nadu": "./imgsTamil_Nadu.jpg",
  Telangana: "./imgs/Telangana.png",
  Tripura: "./imgs/Tripura.png",
  "Uttar Pradesh": "./imgs/Uttar_Pradesh.png",
  Uttarakhand: "./imgs/Uttarakhand.png",
  "West Bengal": "./imgs/West_Bengal.png",
};
let state_codes = {
  "Madhya Pradesh": 23,
  Odisha: 21,
  Mizoram: 15,
  Sikkim: 11,
  Goa: 30,
  Kerala: 32,
  Karnataka: 29,
  Maharashtra: 27,
  Manipur: 14,
  Meghalaya: 17,
  Chhattisgarh: 22,
  Gujarat: 24,
  "Arunachal Pradesh": 12,
  Assam: 18,
  "Andhra Pradesh": 37,
  "Andaman and Nicobar Islands": 35,
  Chandigarh: 4,
  Telangana: 36,
  "Tamil Nadu": 33,
  Rajasthan: 8,
  Punjab: 3,
  Puducherry: 34,
  Jharkhand: 20,
  Tripura: 16,
  Lakshadweep: 31,
  Nagaland: 13,
  Ladakh: 1,
  Bihar: 10,
  "Uttar Pradesh": 9,
  Uttarakhand: 5,
  "Himachal Pradesh": 2,
  Haryana: 6,
  "Jammu and Kashmir": 1,
  "Jammu & Kashmir": 1,
  "NCT OF Delhi": 7,
  "Dadra and Nagar Haveli": 26,
  "West Bengal": 19,
};
const partyColors = {
  "BJP": "#FF9933",
  "INC": "#19AAED",
  "TMC(M)": "#ff8d33",
  "DMK": "#FF0D0D",
  "ADMK": "#009546",
  "AAP": "#0072B0",
  "AIMIM": "#0c6b4b",
  "YSRCP": "#1569C7",
  "BRS": "#F84996",
  "DMDK": "#FFEA19",
  "PMK": "#FFFF00",
  "CPI": "#FF3333",
  "CPM": "#FF6600",
  "BJD": "#70A548",
  "IUML": "#006600",
  "JKPDP": "#058532",
  "JJP": "#FF3300",
  "KC": "#800000",
  "PPA": "#FF6666",
  "SP": "#FF2222",
  "SHS": "#FD7D24",
  "VCK": "#1E90FF",
  "Puthiya Tamilagam": "#FF9933",
  "NTK": "#008000",
  "NOTA": "#fff",
  "AITC": "#D3D3D3",
  "BSP": "#22409A",
  "CPIM": "#cc0d0d",
  "NCP": "#00B2B2",
  "AGP": "#99CCFF",
  "AIFB": "#ac1313",
  "AINRC": "#00008B",
  "AIUDF": "#348017",
  "AJSUP": "#228B22",
  "BLSP": "#FF4500",
  "BOPF": "#FF6600",
  "INLD": "#336600",
  "IPFT": "#8B0000",
  "JD(S)": "#02865A",
  "JD(U)": "#003366",
  "JKN": "#fe0000",
  "JKNPP": "#060950",
  "JMM": "#337316",
  "JVM": "#FF4500",
  "KEC(M)": "#F48385",
  "LJP": "#5B006A",
  "MNF": "#2E5694",
  "NDPP": "#ED1B24",
  "NPEP": "#FFCA61",
  "NPF": "#1717CC",
  "RJD": "#056D05",
  "RLD": "#006400",
  "RSP": "#FFD42A",
  "SAD": "#0F204A",
  "SDF": "#FBEC5D",
  "SKM": "#FF4500",
  "TDP": "#FFED00",
  "TRS": "#FF69B4",
  "UDP": "#FE0002",
  "AABHAP": "#00008B",
  "AACP": "#8B4513",
  "AAHPty": "#FF4500",
  "AAM": "#228B22",
  "AAPP": "#0000FF",
  "ABD": "#8B0000",
  "ABEP": "#FF4500",
  "ABGP": "#228B22",
  "ABHM": "#FF9933",
  "ABHP": "#0000FF",
  "ABHS": "#FF4500",
  "ABJS": "#FF9933",
  "ABLP": "#FF4500",
  "ABML(S)": "#008000",
  "ABMP": "#8B0000",
  "ABNNP": "#0000FF",
  "ABSKP": "#8B4513",
  "ABSSP": "#8B0000",
  "ACDP": "#8B0000",
  "ACP": "#8B4513",
  "ADAL": "#99CCFF",
  "ADPT": "#8B0000",
  "ADRP": "#228B22",
  "ADRSP": "#00008B",
  "ADUP": "#FFD700",
  "AgIMK": "#8B4513",
  "AHFBK": "#FF0000",
  "AHIMSASP": "#228B22",
  "AHNP": "#8B0000",
  "aicp": "#138808",
  "AIDMMK": "#FFD700",
  "AIJAP": "#8B0000",
  "AIMAK": "#FFD700",
  "AIMF": "#008000",
  "AINHCP": "#138808",
  "AINPP": "#FF4500",
  "AIP": "#0000FF",
  "AIPF": "#8B0000",
  "AIPTMMK": "#D3D3D3",
  "AIRCP": "#138808",
  "AIUC": "#008000",
  "AIUUK": "#FFD700",
  "AIVP": "#8B0000",
  "AJM": "#8B4513",
  "AJNSP": "#0000FF",
  "AJPI": "#00008B",
  "AJPR": "#00008B",
  "AKBHAD": "#FFD700",
  "AKBJHP": "#228B22",
  "AKBMP": "#8B0000",
  "AKHP": "#FF9933",
  "AKSP": "#228B22",
  "ALHP": "#008000",
  "ALINLBP": "#FF0000",
  "ALoP": "#8B0000",
  "AlPP": "#0000FF",
  "AMB": "#FF4500",
  "AMiP": "#8B0000",
  "AMKP": "#228B22",
  "AMPK": "#FFD700",
  "AnAP": "#FF4500",
  "ANC": "#3366CC",
  "ANIJP": "#00008B",
  "ANNADATA": "#FFD700",
  "ANRP": "#8B4513",
  "ANSP": "#228B22",
  "APEP": "#D3D3D3",
  "APKSP": "#228B22",
  "APoI": "#3366CC",
  "ARK": "#FF4500",
  "ARP": "#3366CC",
  "ARPS": "#8B4513",
  "ASaP": "#008000",
  "ASDC": "#8B0000",
  "ASDHP": "#8B0000",
  "ASGP": "#8B0000",
  "ASJP": "#8B4513",
  "ASP": "#3366CC",
  "ATBP": "#00008B",
  "AVIRP": "#8B0000",
  "AVVP": "#8B4513",
  "AYP": "#3366CC",
  "AYSRCP": "#FFD700",
  "BAAP": "#8B0000",
  "BAEP": "#FF9933",
  "BaHaP": "#228B22",
  "BAHUMP": "#3366CC",
  "BaJD": "#FF9933",
  "BALP": "#D3D3D3",
  "BARESP": "#D3D3D3",
  "BARP": "#D3D3D3",
  "BaSaPa": "#FF9933",
  "BaVaP": "#FF9933",
  "BAWPA": "#D3D3D3",
  "BBC": "#D3D3D3",
  "BBKD": "#D3D3D3",
  "BBM": "#D3D3D3",
  "BBMP": "#D3D3D3",
  "BBPP": "#D3D3D3",
  "BCUF": "#D3D3D3",
  "BDJS": "maroon",
  "BDlP": "#D3D3D3",
  "BDPty": "#D3D3D3",
  "BEPP": "#D3D3D3",
  "BGanP": "#D3D3D3",
  "BHABHAPA": "#D3D3D3",
  "BHAIP": "#FF9933",
  "BhAmAP": "#D3D3D3",
  "BHAPRAP": "#D3D3D3",
  "BhaRP": "#D3D3D3",
  "BHAZS": "#D3D3D3",
  "BHBHP": "#D3D3D3",
  "BHBP": "#D3D3D3",
  "BhBSP": "#D3D3D3",
  "BHHF": "#D3D3D3",
  "BHJMP": "#D3D3D3",
  "BHMP": "#D3D3D3",
  "BhNP": "#FF9933",
  "BHPP": "#D3D3D3",
  "BHTJP": "#D3D3D3",
  "BIP": "#D3D3D3",
  "BJAZP": "#D3D3D3",
  "bjdi": "#D3D3D3",
  "BJKD": "#D3D3D3",
  "BJKVP": "#D3D3D3",
  "BJNP": "#D3D3D3",
  "BJSAP": "#D3D3D3",
  "BJSPP": "#FF9933",
  "BJSTP": "#D3D3D3",
  "BKNP": "#D3D3D3",
  "BKPP": "#D3D3D3",
  "BKrD": "#D3D3D3",
  "BKVP": "#D3D3D3",
  "BLND": "#D3D3D3",
  "BLokSP": "#D3D3D3",
  "BLRP": "#D3D3D3",
  "BLSD": "#D3D3D3",
  "bmd": "#D3D3D3",
  "BMF": "#D3D3D3",
  "BMFP": "#D3D3D3",
  "BMJP": "#D3D3D3",
  "BMSM": "#D3D3D3",
  "BMtrP": "#D3D3D3",
  "BMUP": "#3366CC",
  "BMVSP": "#D3D3D3",
  "BNARP": "#D3D3D3",
  "BNavP": "#D3D3D3",
  "BND": "#D3D3D3",
  "BNDl": "#D3D3D3",
  "BNIP": "#D3D3D3",
  "BNJD": "#D3D3D3",
  "bns": "#D3D3D3",
  "BNSKP": "#D3D3D3",
  "BPC": "#D3D3D3",
  "BPKP": "#D3D3D3",
  "BPSJP": "#D3D3D3",
  "BRKP(D)": "#D3D3D3",
  "BRM": "#D3D3D3",
  "BRP": "#8B0000",
  "BRPI": "#D3D3D3",
  "BRPPA": "#D3D3D3",
  "BRSP": "#D3D3D3",
  "BSCP": "#D3D3D3",
  "BSDL": "#D3D3D3",
  "BSHSP": "#D3D3D3",
  "BSKP": "#FF9933",
  "BSKRP": "#D3D3D3",
  "BSP(A)": "#D3D3D3",
  "BSPM": "#D3D3D3",
  "BSSPA": "#D3D3D3",
  "BSUSP": "#D3D3D3",
  "BTARP": "#D3D3D3",
  "BTP": "#D3D3D3",
  "BUNKD": "#D3D3D3",
  "BVA": "#D3D3D3",
  "BYPP": "#D3D3D3",
  "CDF": "#D3D3D3",
  "CHALP": "#D3D3D3",
  "CHKAP": "#D3D3D3",
  "CoAP": "#D3D3D3",
  "CPI(ML)(L)": "#C41301",
  "CSM": "#D3D3D3",
  "cvgrp": "#D3D3D3",
  "DABAP": "#D3D3D3",
  "DAMK": "#D3D3D3",
  "DCLF": "#D3D3D3",
  "DJHP": "#D3D3D3",
  "DKSP": "#D3D3D3",
  "DMSK": "#D3D3D3",
  "DPI": "#D3D3D3",
  "DPIN": "#D3D3D3",
  "DPPS": "#D3D3D3",
  "DSPVAD": "#D3D3D3",
  "DSSP": "#D3D3D3",
  "DUUK": "#D3D3D3",
  "EP": "#D3D3D3",
  "ESP": "#D3D3D3",
  "ETMK": "#D3D3D3",
  "FDLP": "#D3D3D3",
  "FIP": "#D3D3D3",
  "FJP": "#D3D3D3",
  "FPI": "#D3D3D3",
  "GaAP": "#D3D3D3",
  "GAGUP": "#D3D3D3",
  "GGP": "purple",
  "GJNP": "#D3D3D3",
  "GJPP": "#D3D3D3",
  "GPI": "#D3D3D3",
  "grac": "#D3D3D3",
  "HAMS": "#F5D62A",
  "HAPa": "#D3D3D3",
  "HBP": "#D3D3D3",
  "HCP": "#D3D3D3",
  "HIMJKP": "#D3D3D3",
  "HiPPa": "#D3D3D3",
  "HJP": "#D3D3D3",
  "HMRD": "#D3D3D3",
  "HMSKP": "#D3D3D3",
  "HND": "#D3D3D3",
  "HSP": "#D3D3D3",
  "HSS": "#D3D3D3",
  "HuSP": "#D3D3D3",
  "ICF": "#D3D3D3",
  "IDRP": "#D3D3D3",
  "igp": "#D3D3D3",
  "IICR": "#D3D3D3",
  "ILP(AP)": "#D3D3D3",
  "IMK": "#D3D3D3",
  "INCP": "#D3D3D3",
  "INDPP": "#D3D3D3",
  "INL": "#D3D3D3",
  "IPBP": "#D3D3D3",
  "IPGP": "#D3D3D3",
  "IRNP": "#D3D3D3",
  "IUC": "#D3D3D3",
  "IVD": "#D3D3D3",
  "JAAP": "#D3D3D3",
  "JAC": "#D3D3D3",
  "JAJGP": "#D3D3D3",
  "JANADIP": "#D3D3D3",
  "JANKRPR": "#D3D3D3",
  "JANSAPP": "#D3D3D3",
  "JanSP": "#D3D3D3",
  "JAPL": "#D3D3D3",
  "JaSD": "#D3D3D3",
  "JASP": "#D3D3D3",
  "JaSSP": "#D3D3D3",
  "JASWP": "#D3D3D3",
  "JD": "#D3D3D3",
  "JDL": "#D3D3D3",
  "JDR": "#D3D3D3",
  "JeSM": "#D3D3D3",
  "JGHTP": "#D3D3D3",
  "JHAP": "#D3D3D3",
  "JHBHP": "#D3D3D3",
  "JHP": "#D3D3D3",
  "jhspt": "#D3D3D3",
  "JJJKP": "#D3D3D3",
  "JKiP": "#D3D3D3",
  "JKP": "#D3D3D3",
  "JKP(N)": "#D3D3D3",
  "JKPP": "#D3D3D3",
  "JKPPAP": "#D3D3D3",
  "JKPS": "#D3D3D3",
  "JLokP": "#D3D3D3",
  "JMBP": "#D3D3D3",
  "JMM(U)": "#D3D3D3",
  "JNJP": "#D3D3D3",
  "JnP": "#ca420f",
  "JNSMP": "#D3D3D3",
  "JP": "#D3D3D3",
  "JPC": "#FF0000",
  "JPD": "#D3D3D3",
  "JPJD": "#D3D3D3",
  "JPS": "#D3D3D3",
  "JRPa": "#D3D3D3",
  "JRVP": "#D3D3D3",
  "JSEP": "#D3D3D3",
  "JSP": "#D3D3D3",
  "JSVP": "#D3D3D3",
  "JTVP": "#D3D3D3",
  "JVBP": "#D3D3D3",
  "kajp": "#D3D3D3",
  "KARASP": "#D3D3D3",
  "KBD": "#D3D3D3",
  "KCVP": "#D3D3D3",
  "KEC": "#CC6600",
  "KHSNP": "#D3D3D3",
  "KJP": "#D3D3D3",
  "KKJHS": "#D3D3D3",
  "KKMP": "#D3D3D3",
  "KMBS": "#D3D3D3",
  "KMSP": "#D3D3D3",
  "KPJP": "#D3D3D3",
  "KPOI": "#D3D3D3",
  "KPPR": "#D3D3D3",
  "KPPU": "#D3D3D3",
  "KRUP": "#D3D3D3",
  "KS": "#D3D3D3",
  "KSRP": "#D3D3D3",
  "KSRSP": "#D3D3D3",
  "LAJSP": "#D3D3D3",
  "LCD": "#D3D3D3",
  "LD": "#D3D3D3",
  "LIP": "#D3D3D3",
  "LJGP": "#D3D3D3",
  "LJSPty": "#D3D3D3",
  "LJVM": "#D3D3D3",
  "LKSGM": "#D3D3D3",
  "LOGAP": "#D3D3D3",
  "LOKJANP": "#D3D3D3",
  "LoRP": "#D3D3D3",
  "LPSP": "#D3D3D3",
  "LSD": "#D3D3D3",
  "LTSP": "#D3D3D3",
  "MADP": "#D3D3D3",
  "MAHKRS": "#D3D3D3",
  "ManJP": "#D3D3D3",
  "ManKP": "#D3D3D3",
  "MaNPa": "#D3D3D3",
  "MARD": "#D3D3D3",
  "MCPI": "#D3D3D3",
  "MDKMGPH": "#D3D3D3",
  "MDPF": "#D3D3D3",
  "MHD": "#D3D3D3",
  "mimm": "#D3D3D3",
  "MKat": "#D3D3D3",
  "MKDVP": "#D3D3D3",
  "MKUP": "#D3D3D3",
  "MLJK": "#D3D3D3",
  "MLPOIRF": "#D3D3D3",
  "MMKA": "#D3D3D3",
  "MNDP": "#D3D3D3",
  "MNM": "#D3D3D3",
  "MNVP": "#D3D3D3",
  "MOSP": "#D3D3D3",
  "MPEP": "#D3D3D3",
  "MPJVP": "#D3D3D3",
  "MPOI": "#D3D3D3",
  "MPP": "#D3D3D3",
  "MSHP": "#D3D3D3",
  "MSJP": "#D3D3D3",
  "MSKK": "#D3D3D3",
  "MwSP": "#D3D3D3",
  "MYSP": "#D3D3D3",
  "NABMUP": "#D3D3D3",
  "NALAP": "#D3D3D3",
  "NaLP": "#D3D3D3",
  "NAP": "#D3D3D3",
  "NAPt": "#D3D3D3",
  "NATJUP": "#D3D3D3",
  "NATWOMP": "#D3D3D3",
  "NavaP": "#D3D3D3",
  "NAWPP": "#D3D3D3",
  "NDDHP": "#D3D3D3",
  "NDEP": "#D3D3D3",
  "NDPOI": "#D3D3D3",
  "NED": "#D3D3D3",
  "NEINDP": "#D3D3D3",
  "NEP": "#D3D3D3",
  "NFFF": "#D3D3D3",
  "NIDP": "#B31818",
  "NIP": "#D3D3D3",
  "NIRBHP": "#D3D3D3",
  "NJANP": "#D3D3D3",
  "NJP": "#D3D3D3",
  "NNKP": "#D3D3D3",
  "NNMP": "#D3D3D3",
  "NNP": "#D3D3D3",
  "NPRP": "#D3D3D3",
  "NPSF": "#D3D3D3",
  "NPT": "#D3D3D3",
  "NRCong": "#D3D3D3",
  "NRCP": "#D3D3D3",
  "NSBHP": "#D3D3D3",
  "NSCBRAP": "#D3D3D3",
  "NVSP": "#D3D3D3",
  "NYP": "#D3D3D3",
  "OPD": "#D3D3D3",
  "PAP": "#D3D3D3",
  "PBI": "#D3D3D3",
  "PDP": "#D3D3D3",
  "PDS": "#D3D3D3",
  "PECP": "#D3D3D3",
  "PGSP": "#D3D3D3",
  "PHJSP": "#D3D3D3",
  "PHRC": "#D3D3D3",
  "PHSP": "#D3D3D3",
  "pjdl": "#D3D3D3",
  "PJSP": "#D3D3D3",
  "PLM": "#D3D3D3",
  "PLP": "#D3D3D3",
  "PMP": "#D3D3D3",
  "PMPT": "#D3D3D3",
  "PMSP": "#D3D3D3",
  "PNP": "#D3D3D3",
  "PPID": "#D3D3D3",
  "PPIS": "#D3D3D3",
  "PPOI": "#D3D3D3",
  "PRCP": "#D3D3D3",
  "PRISM": "#D3D3D3",
  "PRISMP": "#D3D3D3",
  "PRJP": "#D3D3D3",
  "PRSHP": "#D3D3D3",
  "PRSP": "#D3D3D3",
  "PrStP": "#D3D3D3",
  "PSJP": "#D3D3D3",
  "PSPL": "#D3D3D3",
  "PSPU": "#D3D3D3",
  "PSS": "#D3D3D3",
  "PUDEP": "#D3D3D3",
  "PUJP": "#D3D3D3",
  "PUNEKP": "#D3D3D3",
  "PUNP": "#D3D3D3",
  "RaAD": "#D3D3D3",
  "RABSP": "#D3D3D3",
  "RACHEP": "#D3D3D3",
  "RADM": "#D3D3D3",
  "RAHIS": "#D3D3D3",
  "RAHM": "#D3D3D3",
  "RAIM": "#D3D3D3",
  "RaIP": "#D3D3D3",
  "RAJADP": "#D3D3D3",
  "RaJPa": "#D3D3D3",
  "rajpt": "#D3D3D3",
  "RaJSP": "#D3D3D3",
  "RAJSPty": "#D3D3D3",
  "RAJUP": "#D3D3D3",
  "RAKRD": "#D3D3D3",
  "RaNP": "#D3D3D3",
  "RAPI": "#D3D3D3",
  "RAPty": "#D3D3D3",
  "RASAP": "#D3D3D3",
  "RASHLSP": "#D3D3D3",
  "RASJGP": "#D3D3D3",
  "RasLP": "#D3D3D3",
  "RASMARP": "#D3D3D3",
  "ravp": "#D3D3D3",
  "RBCP": "#D3D3D3",
  "RBJJP": "#D3D3D3",
  "RBP": "#D3D3D3",
  "RBS": "#D3D3D3",
  "RD": "#D3D3D3",
  "RDHP": "#D3D3D3",
  "RDU": "#D3D3D3",
  "REALDP": "#D3D3D3",
  "RGD": "#D3D3D3",
  "RGOP": "#D3D3D3",
  "RHSP": "#D3D3D3",
  "RJanPty": "#D3D3D3",
  "RJANSWP": "#D3D3D3",
  "RJAPU": "#D3D3D3",
  "RJAVP": "#D3D3D3",
  "RJBP": "#D3D3D3",
  "RJBVP": "#D3D3D3",
  "RJNP": "#D3D3D3",
  "RJnPty": "#D3D3D3",
  "RJPD": "#D3D3D3",
  "RJsbhP": "#D3D3D3",
  "RJSNP": "#D3D3D3",
  "RJSPS": "#D3D3D3",
  "RKSP": "#D3D3D3",
  "RLTP": "#FFD42A",
  "RMEP": "#D3D3D3",
  "RMGLMP": "#D3D3D3",
  "RMGP": "#D3D3D3",
  "RMMP": "#D3D3D3",
  "RMPOI": "#D3D3D3",
  "RND": "#D3D3D3",
  "RNNBP": "#D3D3D3",
  "RP(K)": "#D3D3D3",
  "RPB": "#D3D3D3",
  "RPC(S)": "#D3D3D3",
  "RPI": "#D3D3D3",
  "RPI(A)": "#000080",
  "RPI(KH)": "#D3D3D3",
  "RPI(KM)": "#D3D3D3",
  "RPIE": "#D3D3D3",
  "RPIK": "#D3D3D3",
  "RPIR": "#D3D3D3",
  "RPP": "#D3D3D3",
  "rpsn": "#D3D3D3",
  "RPWP": "#D3D3D3",
  "RRP": "#D3D3D3",
  "RRS": "#D3D3D3",
  "RsAD": "#D3D3D3",
  "RSDal": "#D3D3D3",
  "RSJVP": "#D3D3D3",
  "RSMD": "#D3D3D3",
  "RSOSP": "#D3D3D3",
  "RSP(S)": "#D3D3D3",
  "RSPS": "yellow",
  "RSPSR": "#D3D3D3",
  "RSTSAHP": "#D3D3D3",
  "RSVP": "#D3D3D3",
  "RSWD": "#D3D3D3",
  "RTAMP": "#D3D3D3",
  "RTBHP": "#D3D3D3",
  "RTJPS": "#D3D3D3",
  "RTKP": "#D3D3D3",
  "RTORP": "#D3D3D3",
  "RtrJP": "#D3D3D3",
  "RTSGP": "#D3D3D3",
  "RUC": "#D3D3D3",
  "RVLP": "#D3D3D3",
  "RVNP": "#D3D3D3",
  "RVP": "#D3D3D3",
  "RVyP": "#D3D3D3",
  "RVZP": "#D3D3D3",
  "SAAFP": "#D3D3D3",
  "SABHP": "#D3D3D3",
  "SABJANP": "#D3D3D3",
  "SaBP": "#D3D3D3",
  "SACP": "#D3D3D3",
  "SAD(M)": "#D3D3D3",
  "SaDa": "#D3D3D3",
  "SADSP": "#D3D3D3",
  "SADT": "#D3D3D3",
  "SAJP": "#D3D3D3",
  "SAKAP": "#D3D3D3",
  "SAKSP": "#D3D3D3",
  "SamSP": "#D3D3D3",
  "SanS": "#D3D3D3",
  "SANVP": "#D3D3D3",
  "SAPRP": "#D3D3D3",
  "SaRaPa": "#D3D3D3",
  "SaSaP": "#D3D3D3",
  "SatBP": "#D3D3D3",
  "SATKP": "#D3D3D3",
  "SAVIPA": "#D3D3D3",
  "SaVP": "#D3D3D3",
  "SBM": "#D3D3D3",
  "SBSP": "#f5d50a",
  "SBSPSP": "#D3D3D3",
  "SDC": "#D3D3D3",
  "SDP(MP)": "#D3D3D3",
  "SDPI": "#E50600",
  "SDSP": "#D3D3D3",
  "SDU": "#D3D3D3",
  "SFP": "#D3D3D3",
  "SGUP": "#D3D3D3",
  "SHF": "#D3D3D3",
  "SJDD": "#D3D3D3",
  "SJPA": "#D3D3D3",
  "SJPI": "#D3D3D3",
  "SJPT": "#D3D3D3",
  "SJSMP": "#D3D3D3",
  "SJVP": "#D3D3D3",
  "skd": "#D3D3D3",
  "SKPP": "#D3D3D3",
  "SLDP": "#D3D3D3",
  "SMARTIP": "#D3D3D3",
  "SMFB": "#D3D3D3",
  "SNP": "#D3D3D3",
  "SoJP": "#D3D3D3",
  "SP(I)": "#D3D3D3",
  "SPAKP": "#D3D3D3",
  "SPL": "#D3D3D3",
  "SPRP": "#D3D3D3",
  "SSBD": "#D3D3D3",
  "SSD": "#D3D3D3",
  "ssrd": "#D3D3D3",
  "STBP": "#D3D3D3",
  "STBSP": "#D3D3D3",
  "STPI": "#D3D3D3",
  "SUCI(C)": "#FF0000",
  "SUSP": "#D3D3D3",
  "SUTF": "#D3D3D3",
  "svjn": "#D3D3D3",
  "SVJSP": "#D3D3D3",
  "SVPP": "#D3D3D3",
  "SwaBP": "#D3D3D3",
  "SWAJANPA": "#D3D3D3",
  "SWAP": "#D3D3D3",
  "swbi": "#D3D3D3",
  "SWJP": "#D3D3D3",
  "SWP": "#D3D3D3",
  "SWSP": "#D3D3D3",
  "TECPI": "#D3D3D3",
  "TELYS": "#D3D3D3",
  "TGPJP": "#D3D3D3",
  "TJS": "#D3D3D3",
  "TNLK": "#D3D3D3",
  "TNRMPI": "#D3D3D3",
  "ToP": "#D3D3D3",
  "TRIPP": "#D3D3D3",
  "TSP": "#D3D3D3",
  "TTNP": "#D3D3D3",
  "UBM": "#D3D3D3",
  "UDFS": "#D3D3D3",
  "UKDD": "#D3D3D3",
  "UKKD": "#336666",
  "UMK": "#D3D3D3",
  "UPJP": "#D3D3D3",
  "UPNSE": "#D3D3D3",
  "UPP": "#D3D3D3",
  "UPPL": "#FAED09",
  "USIP": "#D3D3D3",
  "UtPP": "#D3D3D3",
  "UTSAP": "#D3D3D3",
  "VBA": "BLUE",
  "VCSMP": "#D3D3D3",
  "VIP": "#D3D3D3",
  "VIPty": "#D3D3D3",
  "VJNP": "#D3D3D3",
  "VMMKT": "#D3D3D3",
  "VMSKP": "#D3D3D3",
  "VoP": "#D3D3D3",
  "VPI": "#D3D3D3",
  "VPP": "#D3D3D3",
  "VSIP": "#0000ff",
  "VSP": "#D3D3D3",
  "WAP": "#D3D3D3",
  "WPOI": "#D3D3D3",
  "YJJP": "#D3D3D3",
  "YKP": "#D3D3D3",
  "YSRPP": "#D3D3D3",
  "YuS": "#D3D3D3",
  "YVP": "#D3D3D3",
  "IND": "#D3D3D3"
};
const stateMaps = {
  BJP: "./imgs/BJP.webp",
  INC: "./imgs/INC.svg",
  DMK: "./imgs/DMK.webp",
  YSRCP: "./imgs/YSRCP.jpeg",
  AITC: "./imgs/AITC.png",
  SHS: "./imgs/SHS.png",
  "JD(U)": "./imgs/JD(U).png",
  BJD: "./imgs/BJD.png",
  BSP: "./imgs/BSP.jpg",
  TRS: "./imgs/TRS.jpg",
  BRS: "./imgs/BRS.jpg",
  LJP: "./imgs/LJP.jpg",
  NCP: "./imgs/NCP.webp",
  SP: "./imgs/SP.jpg",
  TDP: "./imgs/TDP.webp",
  JKN: "./imgs/JKN.webp",
  IUML: "./imgs/IUML.jpg",
  CPIM: "./imgs/CPIM.png",
  AIMIM: "./imgs/AIMIM.png",
  SAD: "./imgs/SAD.webp",
  CPI: "./imgs/CPI.webp",
  ADAL: "./imgs/ADAL.webp",
  AIUDF: "./imgs/AIUDF.png",
  JMM: "./imgs/JMM.png",
  AJSUP: "./imgs/AJSUP.jpg",
  "JD(S)": "./imgs/JD(S).jpg",
  "KEC(M)": "./imgs/KEC(M).webp",
  "Andaman and Nicobar Islands": "./imgs/Andaman_&_Nicobar_Islands.jpg",
  "Andhra Pradesh": "./imgs/Andhra_Pradesh.webp",
  "Arunachal Pradesh": "./imgs/Arunachal_Pradesh.jpg",
  Assam: "./imgs/Assam.jpg",
  Bihar: "./imgs/Bihar.jpg",
  Chandigarh: "./imgs/Chandigarh.png",
  Chhattisgarh: "./imgs/Chhattisgarh.jpg",
  "Dadra and Nagar Haveli": "./imgs/Dadra_&_Nagar_Haveli.png",
  "Daman & Diu": "./imgs/Daman_&_Diu.jpg",
  Goa: "./imgs/Goa.jpg",
  Gujarat: "./imgs/Gujarat.jpg",
  Haryana: "./imgs/Haryana.jpg",
  "Himachal Pradesh": "./imgs/Himachal_Pradesh.jpg",
  "Jammu and Kashmir": "./imgs/Jammu_&_Kashmir.jpg",
  Jharkhand: "./imgs/Jharkhand.jpg",
  Karnataka: "./imgs/Karnataka.jpg",
  Kerala: "./imgs/Kerala.jpg",
  Lakshadweep: "./imgs/Lakshadweep.gif",
  "Madhya Pradesh": "./imgs/Madhya_Pradesh.jpg",
  Maharashtra: "./imgs/Maharashtra.jpg",
  Manipur: "./imgs/Manipur.jpg",
  Meghalaya: "./imgs/Meghalaya.jpg",
  Mizoram: "./imgs/Mizoram.png",
  Nagaland: "./imgs/Nagaland.png",
  "NCT OF Delhi": "./imgs/NCT_OF_Delhi.jpeg",
  Odisha: "./imgs/Odisha.png",
  Puducherry: "./imgs/Puducherry.png",
  Punjab: "./imgs/Punjab.jpg",
  Rajasthan: "./imgs/Rajasthan.png",
  Sikkim: "./imgs/Sikkim.png",
  "Tamil Nadu": "./imgsTamil_Nadu.jpg",
  Telangana: "./imgs/Telangana.png",
  Tripura: "./imgs/Tripura.png",
  "Uttar Pradesh": "./imgs/Uttar_Pradesh.png",
  Uttarakhand: "./imgs/Uttarakhand.png",
  "West Bengal": "./imgs/West_Bengal.png",
};
const unionTerritories = [
  "Ladakh",
  "Andaman and Nicobar Islands",
  "Jammu and Kashmir",
  "Puducherry",
  "NCT OF Delhi",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Lakshadweep",
];

let alliancePatries = {
  nda: {},
  india: {},
  others: {},
};
let stateDataJson2019;
let allianceJson2019;
let data2024 = {};
let stateDataJson;
let allianceJson;
let data = {};
let ftrs, geo, geo2, map;
let names = {
  "#F47216": "NDA",
  "#87CEEB": "I.N.D.I.A",
  "#BFC8D0": "Others",
  ndaColor: "#F47216",
  indiaColor: "#87CEEB",
  othersColor: "#BFC8D0",
};
let temp = 1;
async function fetchJSON2(file) {
  // data_2019 = {};
  try {
    const response = await fetch(file); // Fetch the JSON file
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    data_201 = await response.json();
    console.log("JSON data fetched and stored globally:", data_201);
    function format2(data2024) {
      for (let state in data2024) {
        for (let const_name in data2024[state]) {
          const candidates = [];
          for (let item of data2024[state][const_name]["candidates"]) {
            const candidate = {
              candidateId: item.cId,
              candidateName: item.cName,
              constituencyName: const_name,
              party: item.prty,
              alliance: item.alnce,
              votes: item.vts,
            };
            candidates.push(candidate);
          }
          // Access constituency code from constCodes if properly defined
          const constituencyCode = constCodes[state][const_name];
          if (constituencyCode) {
            // Assign candidates to the corresponding constituency code in data_2019
            data_2019[constituencyCode] = candidates;
          }
        }
      }
    }
    format2(data_201[0]);
  } catch (error) {
    console.error("Error fetching the JSON file:", error);
    throw error; // Rethrow the error for the caller to handle
  }
}
async function fetchGeoJSON(file) {
  try {
    const response = await fetch(file);
    const geoJson = await response.json();
    ftrs = geoJson.features
      .map((i) => i.properties)
      .sort((a, b) =>
        a.pc_name > b.pc_name ? 1 : a.pc_name < b.pc_name ? -1 : 0
      );
    // Initialize the map and add the GeoJSON layer
    // console.log(L);
    map = L.map("map", { attributionControl: false, zoomSnap: 0.2 });
    geo = L.geoJSON(geoJson, {
      onEachFeature: (feature, layer) => {
        layer.on("click", function (event) {
          // console.log("first");
          state_value = feature.properties.st_code;
          render_state_carousel(feature.properties.st_name);
          breadcrumbState.innerHTML = `<a href="#" onclick="resetstatebread()">${feature.properties.st_name}`;
          // breadcrumbState.style.display = "inline";
          breadcrumbConstituency.textContent = feature.properties.pc_name;
          breadcrumbConstituency.style.display = "inline";
          const candidate_1 =
            data[feature.properties.pc_id][0]["candidateName"];
          const candidate_2 =
            data[feature.properties.pc_id][1]["candidateName"];
          const party_name_1 = data[feature.properties.pc_id][0]["party"];
          const party_name_2 = data[feature.properties.pc_id][1]["party"];
          const votes_1 = data[feature.properties.pc_id][0]["votes"];
          const votes_2 = data[feature.properties.pc_id][1]["votes"];
          const margin = votes_1 - votes_2;

          showdatatable(
            feature.properties.st_name,
            candidate_1,
            candidate_2,
            votes_1,
            votes_2,
            margin,
            feature.properties.pc_name,
            party_name_1,
            party_name_2,
            feature.properties.pc_id
          );
          var map = document.getElementById("map").getBoundingClientRect();
          console.log("map the ", map);
          console.log("event map the ", event);
          var clickY = event.layerPoint.y - map.top;
          var mapHeight = map.height;
          var isAboveHalf = clickY < mapHeight / 2;
          var div = document.getElementById("containertool");

          if (isAboveHalf) {
            div.classList.add("above");
            div.classList.remove("below");
          } else {
            div.classList.add("below");
            div.classList.remove("above");
          }
          // render_table(feature.properties.pc_id,1);
          document.getElementById("stateTabeleContainer").style.display =
            "none";
          document.querySelector("#Constituency-res").style.display = "none";
          document.querySelector("#Candidate-res").style.display = "block";

          // Reset the styles of all layers
        });

        layer._leaflet_id = feature.properties.pc_id;
      },
    });

    map.setView(initialView, initialZoom);
    geo.addTo(map);

    updateMapBounds();
    map.on("resize", delayedBoundsUpdate);

    geo.setStyle((feature) => ({
      weight: 0.2,
      color: "#000",
      fillColor:
        document.querySelector(`tr[data-pc="${feature.properties.pc_id}"]`)
          ?.dataset.pccolor || "#fff",
      fillOpacity: 0.9,
    }));

    // console.log("rendered");

    var filteredFeatures = geoJson.features.filter(
      (feature) => feature.properties.st_code == state_value
    );
    var filteredGeoJson = { ...geoJson, features: filteredFeatures };
    geo2 = L.geoJSON(filteredGeoJson, {
      onEachFeature: (feature, layer) => {
        //   layer.on('mouseover', function(event) {
        //     showBox(feature.properties, layer);
        // });

        // layer.on('mouseout', function(event) {
        //     hideBox();
        // });

        layer.on("click", function (event) {
          console.log("change");
          // document.querySelector("#Constituency-res").style.display =
          //   "none";
          // document.querySelector("#Candidate-res").style.display = "block";
          // breadcrumbConstituency.textContent = feature.properties.pc_name;
          // breadcrumbConstituency.style.display = "inline";
          // render_table(feature.properties.pc_id);
        });
        layer._leaflet_id = feature.properties.pc_id;
      },
    });
  } catch (error) {
    console.error("Error loading GeoJSON:", error);
  }
}
async function fetchJSON(file1, file2) {
  console.log(`called ${temp++}`);
  try {
    const url = "https://results2024.s3.ap-south-1.amazonaws.com/results.json";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    data2024 = await response.json();
    allianceJson = data2024[1];
    stateDataJson = data2024[0];
    // let k = Object.keys(data2024[0]);
    // for (let i of k) {
    //   Object.assign(data, data2024[0][i]);
    // }
    // --------------------
    function format(data2024) {
      for (let state in data2024) {
        for (let const_name in data2024[state]) {
          const candidates = [];
          for (let item of data2024[state][const_name]["candidates"]) {
            const candidate = {
              candidateId: item.cId,
              candidateName: item.cName,
              constituencyName: const_name,
              party: item.prty,
              alliance: item.alnce,
              votes: item.vts,
            };
            candidates.push(candidate);
          }
          data[constCodes[state][const_name]] = candidates;
        }
      }
    }
    format(stateDataJson);
    // ----------------------
    // You can process the JSON data here
  } catch (error) {
    console.error("Error fetching the JSON file:", error);
  }
}
// async function fetchData() {
//   //   console.log(`called ${temp++}`);
//   console.log("entered");
//   try {
//     const url = "http://192.168.1.206:4200/constituency-data"; // Replace with the path to your JSON file
//     const response = await fetch(url);
//     stateDataJson = await response.json();
//     allianceJson = stateDataJson[2];
//     stateDataJson = stateDataJson[1];

//     // console.log("entered ");
//     // console.log(stateDataJson);
//     // **Run the rest of your code here using the imported `data`**
//   } catch (error) {
//     console.error(error);
//   }
//   console.log("exited");
// }

$(document).ready(async function () {
  await fetchJSON("./election2024.json");
  await fetchJSON2("./election2019.json");
  await fetchGeoJSON("geo.json");
  let intervalId = setInterval(async () => {
    await fetchJSON();
    // handleStateClick(lastClickedState);
  }, 10000);
  console.log(data);

  stateDataJson2019 = data_201[0];
  allianceJson2019 = data_201[1];
  // console.log(stateDataJson2019);
  // console.log(allianceJson2019);
  if (getParameterByName("year") === "2019") {
    stateDataJson = stateDataJson2019;
    allianceJson = allianceJson2019;
    // console.log(data_2019);
    data = data_2019;
    console.log("datsis");
    console.log(data);
  }
  // console.log(allianceJson);
  // Function to render India map with statewise colors
  function renderIndiaMap() {
    // Implement the logic to render India map using SVG or any other method
    // Add paths to the SVG map
    //alert("aa");
    document.getElementById(
      "india-map"
    ).innerHTML = `<div id="containertool2"></div><svg id="india-svg" viewBox="0 100 1000 1150" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"></svg>`;
    var pathsStr = "";
    for (let state in paths) {
      pathsStr += `<path id="${states[state]}" d="${paths[state]}"></path>`;
    }
    document.getElementById("india-svg").innerHTML =
      '<svg id="india-svg" viewBox="50 0 900 800" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">' +
      pathsStr +
      "</svg>";
    document.getElementById("map").style.display = "none";
  }

  // Function to render alliance results in tabular format
  renderAllianceResults = function () {
    // Implement the logic to fetch and display alliance results
    alliancePatries = {
      nda: {},
      india: {},
      others: {},
    };
    const tbody = document.getElementById("allianceBody");
    const referenceRow = document.getElementById("referenceRow");

    tbody.innerHTML = "";

    let stateCount = 1;

    for (const state in stateDataJson) {
      // console.log(unionTerritories.includes(state));
      // if (!unionTerritories.includes(state)) {
      let nda = 0,
        india = 0,
        others = 0;

      // console.log(state);
      const stateMap = document.getElementById(state);
      // console.log(stateMap);

      const newRow = referenceRow.cloneNode(true);
      newRow.removeAttribute("id");

      newRow.style.display = "";
      for (const consti in stateDataJson[state]) {
        const leadingCandidate = stateDataJson[state][consti]["candidates"][0];
        if (leadingCandidate.alnce === "NDA") {
          nda++;
          if (alliancePatries["nda"][leadingCandidate.prty] !== undefined)
            alliancePatries["nda"][leadingCandidate.prty]++;
          else alliancePatries["nda"][leadingCandidate.prty] = 1;
        } else if (leadingCandidate.alnce === "OTH") {
          others++;
          if (alliancePatries["others"][leadingCandidate.prty] !== undefined)
            alliancePatries["others"][leadingCandidate.prty]++;
          else alliancePatries["others"][leadingCandidate.prty] = 1;
        } else {
          india++;
          if (alliancePatries["india"][leadingCandidate.prty] !== undefined)
            alliancePatries["india"][leadingCandidate.prty]++;
          else alliancePatries["india"][leadingCandidate.prty] = 1;
        }
        // }
        stateMap.style.fill =
          nda >= india && nda >= others
            ? names.ndaColor
            : india > nda && india >= others
            ? names.indiaColor
            : names.othersColor;

        if (stateCount <= 20) {
          const cells = newRow.getElementsByTagName("td");
          cells[0].innerHTML = `<img id="stateLogo" src='${stateMaps[state]}'>${state}`;
          cells[1].textContent = nda;
          cells[2].textContent = india;
          cells[3].textContent = others;
          tbody.appendChild(newRow);
        }
      }
      stateCount += 1;
    }
    console.log(stateCount);
    // console.log("afhkhbfz");
    // console.log(alliancePatries);
    const sortObjectByValuesDesc = (obj) =>
      Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a));

    // Sorting each sub-object
    alliancePatries.nda = sortObjectByValuesDesc(alliancePatries.nda);
    alliancePatries.india = sortObjectByValuesDesc(alliancePatries.india);
    alliancePatries.others = sortObjectByValuesDesc(alliancePatries.others);

    populateCarousel();
  };

  // Function to render party-wise results in tabular format
  function renderPartyResults() {
    // Implement the logic to fetch and display party-wise results
  }

  // Function to handle click event on state in India map
  // function handleStateClick(state) {
  //   let nda = 0,
  //     india = 0,
  //     others = 0;
  //   state_map(state_codes[state], state);
  //   breadcrumbState.textContent = state;
  //   breadcrumbState.style.display = "inline";
  //   breadcrumbConstituency.style.display = "none";
  //   // Implement the logic to fetch and display state-wise results
  //   const constituencyTable = document.getElementById("stateTable");
  //   const cells = constituencyTable.getElementsByTagName("th");
  //   for (const consti in stateDataJson[state]) {
  //     const leadingCandidate = stateDataJson[state][consti][0];
  //     if (leadingCandidate.alliance === "NDA") nda++;
  //     else if (leadingCandidate.alliance === "OTH") others++;
  //     else india++;
  //   }
  //   updateBar([nda, india, others]);
  // }

  // Function to render state results page
  function renderStateResults(state) {
    // Implement the logic to render state-wise results page
  }

  // Initial rendering of landing page
  renderIndiaMap();
  renderPartyResults();
  renderAllianceResults();
  // updateBar(Object.values(allianceJson));

  // ------------Search in state table-------------------------------
  $("#stateSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#allianceBody tr").filter(function () {
      var text = $(this).text().toLowerCase();
      var words = text.split(/\s+/); // Split text into words
      var match = words.some(function (word) {
        return word.startsWith(value);
      });
      $(this).toggle(match);
    });
  });

  document.getElementById("prevButton").addEventListener("click", function () {
    // document.getElementById("nextButton").className =
    //   "btn btn-light border border-5";
    // document.getElementById("stateRow").textContent = "State";
    // document.getElementById("stateButton").className += " active";
    renderAllianceResults();
  });

  document.getElementById("nextButton").addEventListener("click", function () {
    // document.getElementById("stateRow").textContent = "Union Territory";
    // document.getElementById("stateButton").className =
    //   "btn btn-light border border-5";
    // document.getElementById("unionButton").className += " active";
    const tbody = document.getElementById("allianceBody");
    tbody.innerHTML = "";
    const referenceRow = document.getElementById("referenceRow");

    let states = Object.keys(stateDataJson);
    states = states.slice(20);
    states.forEach((state) => {
      let nda = 0,
        india = 0,
        others = 0;

      const stateMap = document.getElementById(state);
      const newRow = referenceRow.cloneNode(true);
      newRow.removeAttribute("id");
      newRow.style.display = "";
      const cells = newRow.getElementsByTagName("td");
      cells[0].innerHTML = `<img id="stateLogo" src='${stateMaps[state]}'>${state}`;
      for (const consti in stateDataJson[state]) {
        const leadingCandidate = stateDataJson[state][consti]["candidates"][0];
        if (leadingCandidate.alnce === "NDA") nda++;
        else if (leadingCandidate.alnce === "OTH") others++;
        else india++;
      }

      cells[1].textContent = nda;
      cells[2].textContent = india;
      cells[3].textContent = others;
      stateMap.style.fill =
        nda >= india && nda >= others
          ? names.ndaColor
          : india > nda && india >= others
          ? names.indiaColor
          : names.othersColor;

      tbody.appendChild(newRow);
    });

    // for (const state in stateDataJson) {
    //   if (unionTerritories.includes(state)) {
    //     let nda = 0,
    //       india = 0,
    //       others = 0;

    //     const stateMap = document.getElementById(state);
    //     const newRow = referenceRow.cloneNode(true);
    //     newRow.removeAttribute("id");
    //     newRow.style.display = "";
    //     const cells = newRow.getElementsByTagName("td");
    //     cells[0].innerHTML = `<img id="stateLogo" src='${stateMaps[state]}'>${state}`;
    //     for (const consti in stateDataJson[state]) {
    //       const leadingCandidate =
    //         stateDataJson[state][consti]["candidates"][0];
    //       if (leadingCandidate.alnce === "NDA") nda++;
    //       else if (leadingCandidate.alnce === "OTH") others++;
    //       else india++;
    //     }

    //     cells[1].textContent = nda;
    //     cells[2].textContent = india;
    //     cells[3].textContent = others;
    //     stateMap.style.fill =
    //       nda >= india && nda >= others
    //         ? names.ndaColor
    //         : india > nda && india >= others
    //         ? names.indiaColor
    //         : names.othersColor;

    //     tbody.appendChild(newRow);
    //   }
    // }
  });

  // -----------------Accordion population---------------------------------------------
  // Function to handle click event on state in India map

  // Function to render state results page
  function renderStateResults(state) {
    // Implement the logic to render state-wise results page
  }

  // Example click event handler for state in India map
  $("#india-map").on("click", "path", function (event) {
    const state = $(this).attr("id");
    handleStateClick(state);
    creatediv(state);
    half(event);
  });

  let percent = 0;
  let progress_bar = document.querySelector(
    ".transition-timer-carousel-progress-bar"
  );

  let progress_crsl = new bootstrap.Carousel(
    document.getElementById("carouselExampleIndicators"),
    {
      pause: true,
    }
  );

  // Function to animate the progress bar and change slides
  function progressBarCarousel() {
    percent = percent + 1;
    if (percent > 100) {
      percent = 0;
      progress_crsl.next();
    }
  }

  // Start the progress bar animation
  // var barInterval = setInterval(progressBarCarousel, 50);

  // Pause the progress bar animation on hover
  progress_crsl._element.addEventListener("mouseenter", function () {
    clearInterval(barInterval);
    // progress_crsl.pause();
  });

  progress_crsl._element.addEventListener("mouseleave", function () {
    // barInterval = setInterval(progressBarCarousel, 50);
    // progress_crsl.cycle();
  });
  // $("#myInput").on("keyup", function () {
  //   var value = $(this).val().toLowerCase();
  //   $("#allianceBody tr").filter(function () {
  //     var text = $(this).text().toLowerCase();
  //     var words = text.split(/\s+/); // Split text into words
  //     var match = words.some(function (word) {
  //       return word.startsWith(value);
  //     });
  //     $(this).toggle(match);
  //   });
  // });
  //   const exampleValues = [335, 65, 81]; // Change these values to see different results
  console.log("before updating");
  console.log(allianceJson);
  updateBar([allianceJson.NDA, allianceJson.INDIA, allianceJson.OTH]);

  const carousel = document.querySelector("#carouselExampleIndicators");
  const indicators = document.querySelectorAll(".carousel-indicators button");

  // Function to update active indicator color
  function updateIndicatorColor() {
    indicators.forEach((indicator, index) => {
      if (indicator.getAttribute("aria-label") === "Slide 1") {
        indicator.style.backgroundColor = "#F57A00"; // Color for Slide 1
      } else if (indicator.getAttribute("aria-label") === "Slide 2") {
        indicator.style.backgroundColor = "#3AAFDE"; // Default color for other slides
      } else if (indicator.getAttribute("aria-label") === "Slide 3") {
        indicator.style.backgroundColor = "#B8B8B8"; // Default color for other slides
      }
    });
  }

  // Initial update
  updateIndicatorColor();

  // Add event listener for when the carousel slide changes
  carousel.addEventListener("slid.bs.carousel", (event) => {
    updateIndicatorColor();
  });
  const toggleButtons = document.querySelectorAll(".toggleButton");
  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", toggleEntries);
    // const hiddenRows = document.querySelectorAll(".hiddenRow");
    // toggleButton.addEventListener("click", function () {
    //   hiddenRows.forEach((hiddenRow) => {
    //     if (hiddenRow.classList.contains("d-none")) {
    //       hiddenRow.classList.remove("d-none");
    //       toggleButton.textContent = "Show Less";
    //     } else {
    //       hiddenRow.classList.add("d-none");
    //       toggleButton.textContent = "Show All";
    //     }
    //   });
    // });
  });
  // ---------------------------------------------------------
  // toggleButton.addEventListener("click", toggleEntries);
  var parliament = d3.parliament().width(469).innerRadiusCoef(0.3);
  parliament.enter.fromCenter(true).smallToBig(true);
  parliament.exit.toCenter(true).bigToSmall(true);
  parliament.on("click", function (e) {
    console.log(e);
  });

  var setData = function (d) {
    d3.select("#allianceChart").datum(d).call(parliament);
  };

  d3.json("./lib/european.json", setData);
  // --------------------------------------------------------------

  // ----------------------------------------------------
  var options = {
    lables: [names[bars[0].color], names[bars[1].color], names[bars[2].color]],
    series: [bars[0].value, bars[1].value, bars[2].value],
    colors: [bars[0].color, bars[1].color, bars[2].color],
    chart: {
      type: "donut",
      // height: "100%",
      width: "100%",
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      padding: {
        bottom: -80,
      },
    },
    responsive: [
      {
        // breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
  };

  var chart = new ApexCharts(
    document.querySelector("#allianceChart2"),
    options
  );
  document.getElementById("allianceChart2").style.minHeight = `${300}px`;
  chart.render();
});
function toggleEntries() {
  const toggleButtons = document.querySelectorAll(".toggleButton");

  toggleButtons.forEach((toggleButton) => {
    toggleButton.addEventListener("click", toggleEntries);
    if (toggleButton.textContent === "Show All") {
      console.log("enter");
      const hiddenRows = document.querySelectorAll("tbody tr.hiding");
      hiddenRows.forEach((row) => {
        // console.log(row.className);
        row.className = "shown";
        // row.style.opacity = 1;
      });
      const hiddenCols = document.querySelectorAll(".hiddenRow");
      hiddenCols.forEach((hiddenRow) => {
        if (hiddenRow.classList.contains("d-none")) {
          hiddenRow.classList.remove("d-none");
          // toggleButton.textContent = "Show Less";
        } else {
          hiddenRow.classList.add("d-none");
          // toggleButton.textContent = "Show All";
        }
      });
      toggleButton.textContent = "Show Less";
    } else if (toggleButton.textContent === "Show Less") {
      // console.log("exit");

      const hiddenRows = document.querySelectorAll("tbody tr.shown");
      hiddenRows.forEach((row) => {
        // console.log(row.className);
        row.className = "hiding";
        // row.style.opacity = 1;
      });
      const hiddenCols = document.querySelectorAll(".hiddenRow");
      hiddenCols.forEach((hiddenRow) => {
        if (hiddenRow.classList.contains("d-none")) {
          hiddenRow.classList.remove("d-none");
          // toggleButton.textContent = "Show Less";
        } else {
          hiddenRow.classList.add("d-none");
          // toggleButton.textContent = "Show All";
        }
      });
      toggleButton.textContent = "Show All";
    }
  });
  const parentDiv = document.querySelector(".carousel-inner");
  // Select all child divs
  const childDivs = document.querySelectorAll(".carousel-item");

  // Find the maximum width among the child divs
  // let maxHeight = 0;
  // childDivs.forEach((child) => {
  //   const childWidth = child.offsetHeight;
  //   if (childWidth > maxHeight) {
  //     maxHeight = childWidth;
  //   }
  // });
  // parentDiv.style.height = `${maxHeight}px`;
}

// function colorProgress() {
//   let activeElement = document.querySelector(".carousel-item.active");
//   // console.log(activeElement.id);
//   // console.log(activeElement.id);
//   if (activeElement.id.startsWith("nda")) {
//     document.getElementById("carouselProgress").style.backgroundColor =
//       "#FF9933";
//   } else if (activeElement.id.startsWith("india")) {
//     document.getElementById("carouselProgress").style.backgroundColor =
//       "#87CEEB";
//   } else if (activeElement.id.startsWith("others")) {
//     document.getElementById("carouselProgress").style.backgroundColor = "grey";
//   }
// }
function populateCarousel() {
  populateTable("nda", "ndaCarousel");
  populateTable("india", "indiaCarousel");
  populateTable("others", "othersCarousel");
}
function populateTable(alliance, carouselId) {
  let carousel = document.getElementById(carouselId);
  let tbody1 = carousel.querySelector("#tbody1");
  let tbody2 = carousel.querySelector("#tbody2");
  tbody1.innerHTML = "";
  tbody2.innerHTML = "";

  // let count = 1;
  let totalCount = 1; // Total count of rows added
  for (const party in alliancePatries[alliance]) {
    const tr = document.createElement("tr");
    tr.className = " ";
    const td1 = document.createElement("td");
    if(!sym[party])
      {
        td1.innerHTML = `<img id="stateLogo" src='${sym['extra']}'>${party}`;
      }else{
    td1.innerHTML = `<img id="stateLogo" src='${sym[party]}'>${party}`;
      }
    const td2 = document.createElement("td");
    td2.textContent = alliancePatries[alliance][party];

    tr.appendChild(td1);
    tr.appendChild(td2);
    if (totalCount <= 10) {
      if (totalCount <= 5) {
        tbody1.appendChild(tr);
        totalCount += 1;
      } else {
        // console.log("enter"); {
        tbody2.appendChild(tr);
        totalCount += 1;
      }
    } else {
      // Hide one row in tbody1 and one row in tbody2 alternatively
      if (totalCount % 2 === 1) {
        // console.log("enter");
        tr.className = "hiding";
        tbody1.appendChild(tr);
        totalCount += 1;
      } else {
        tr.className = "hiding";
        tbody2.appendChild(tr);
        totalCount += 1;
      }
    }
    const toggleButtons = document.querySelectorAll(".toggleButton");
    if (totalCount > 10) {
      toggleButtons.forEach((toggleButton) => {
        toggleButton.classList.remove("hidden");
      });
      // toggleButton.classList.remove("hidden");
    } else {
      toggleButtons.forEach((toggleButton) => {
        toggleButton.classList.add("hidden");
      });
    }
  }

  // Set the height of the parent div to the maximum width
}
function updateBar(values) {
  const total = values.reduce((acc, val) => acc + val, 0);
  const barContainer = document.getElementById("bar-container");
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");
  bar1.style.display = "block";
  bar2.style.display = "block";
  bar3.style.display = "block";

  // const ndaBar = document.getElementById("ndaBar");
  // const indiaBar = document.getElementById("indiaBar");
  // const othersBar = document.getElementById("othersBar");
  // ndaBar.style.width = (values[0] / total) * 100 + "%";
  // indiaBar.style.width = (values[1] / total) * 100 + "%";
  // othersBar.style.width = (values[2] / total) * 100 + "%";

  // const word1 = document.getElementById("word1");
  // const word2 = document.getElementById("word2");
  // const word3 = document.getElementById("word3");
  const barLabel = document.getElementById("bar-label");
  const barText = document.getElementById("bar-text");

  // Create an array of objects to sort by value
  bars = [
    {
      element: bar1,
      value: values[0],
      colors: `linear-gradient(90deg, #FF9933 0%, #F57A00 100%)`,
      color: "#F47216",
    }, // Blue
    {
      element: bar2,
      value: values[1],
      colors: ` linear-gradient(90deg, #87CEEB 0%, #3AAFDE 100%)`,
      color: "#87CEEB",
    },
    {
      element: bar3,
      value: values[2],
      colors: `linear-gradient(90deg, #D3D3D3 0%, #B8B8B8 100%)`,
      color: "#BFC8D0",
    }, // Red
  ];

  // Sort bars by value in descending order
  bars.sort((a, b) => b.value - a.value);

  // Clear existing bars from the container
  barContainer.innerHTML = "";

  // Append sorted bars to the container
  bars.forEach((bar, index) => {
    const width = (bar.value / total) * 100;
    bar.element.style.width = width + "%";
    bar.element.style.background = bar.colors;
    bar.element.innerText = `${bar.value}`;
    barContainer.appendChild(bar.element);
    if (bar.value === 0) bar.element.style.display = "none";
  });
  // word2.textContent = names[bars[1].color];
  // word2.style.cssText = `left:${(bars[0].value / total) * 100}%;
  // color:${bars[1].color}`;

  // word1.textContent = names[bars[0].color];
  // // console.log(names[bars[0].color]);
  // word1.style.color = bars[0].color;

  // word3.textContent = names[bars[2].color];
  // word3.style.color = bars[2].color;

  // Update the label text
}

// Example usage: updating the bar with specific values
// ------------Search in state table-------------------------------
function handleStateClick(state) {
  console.log("india");
  document.getElementById("breadcrumb-india").style.display = "block";
  let nda = 0,
    india = 0,
    others = 0;
  breadcrumbState.innerHTML = `<a href="#" onclick="resetstatebread2()">${state}`;

  breadcrumbConstituency.style.display = "none";
  // state_map(state_codes[state], state);
  // Implement the logic to fetch and display state-wise results
  const constituencyTable = document.getElementById("stateTable");
  // const cells = constituencyTable.getElementsByTagName("th");
  for (const consti in stateDataJson[state]) {
    const leadingCandidate = stateDataJson[state][consti]["candidates"][0];
    4;
    console.log(leadingCandidate);
    if (leadingCandidate.alnce === "NDA") nda++;
    else if (leadingCandidate.alnce === "OTH") others++;
    else india++;
  }
  updateBar([nda, india, others]);
}
function half(event) {
  var map = document.getElementById("india-map").getBoundingClientRect();
  var clickY = event.clientY - map.top;
  var mapHeight = map.height;
  var isAboveHalf = clickY < mapHeight / 2;
  var div = document.getElementById("containertool2");

  if (isAboveHalf) {
    div.classList.add("above-half");
    div.classList.remove("below-half");
  } else {
    div.classList.add("below-half");
    div.classList.remove("above-half");
  }
}
// console.log(stateDataJson);
function creatediv(state) {
  fetch("election2019.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((stateDataJson) => {
      var obj = {};
      var partynames = [];
      var partyseats = [];
      var constituencyData = stateDataJson[0][state];
      for (let const_name in constituencyData) {
        let party_name =
          stateDataJson[0][state][const_name]["candidates"][0]["prty"];

        if (party_name in obj) {
          obj[party_name] += 1;
        } else obj[party_name] = 1;
      }
      var sortedPartyWins = Object.entries(obj).sort((a, b) => b[1] - a[1]);
      for (let i = 0; i < sortedPartyWins.length; i++) {
        partynames[i] = sortedPartyWins[i][0];
        partyseats[i] = sortedPartyWins[i][1];
      }
      var maindiv = document.getElementById("containertool2");
      var mainindiamap = document.getElementById("india-map");
      mainindiamap.append(maindiv);
      var htmlcode = `<span class="close" onclick="close_btn()">&times;</span>
                        <h2 class="sthead">${state}</h2>
                        
                        <table class="detailstable">
                           <thead>
                              <tr>
                                 <th class="tbhead">Party</th>
                                 <th id="wlright" class="tbhead">Won / Lead</th>
                              </tr>
                           </thead>`;
      htmlcode += `</thead>`;
      if (partynames) {
        for (let i = 0; i < partynames.length && i < 5; i++) {
          if (partynames[i] !== undefined) {
            htmlcode += `<tr>
                                  <td class="tdData"><img class="party-icon" src="${
                                    sym[partynames[i]]
                                  }"> ${partynames[i]}</td>
                                  <td class="tdData" id="wlright">${
                                    obj[partynames[i]]
                                  }</td></tr>`;
          }
        }
      }
      htmlcode += `</tbody>
                           </table><div class="results12">
                            <h3 class="hdiv3">2019 results</h3>
                           <div class="bars">`;

      for (let i = 0; i < partynames.length && i < 3; i++) {
        if (partynames[i] !== undefined && partyseats[i] !== undefined) {
          htmlcode += `<div class="barbox">
                                <span class="barlabel">${partynames[i]}</span>
                              <div class="br${i + 1} inbar" id="id${i}">${
            partyseats[i]
          }</div> </div>`;
        }
      }
      htmlcode += `    </div>
                            </div> <div id="viewdetails" onclick="showmap('${state}')">Check Full Results<span id=gt>&gt</span></div>`;

      maindiv.innerHTML = "";
      maindiv.innerHTML += htmlcode;
      maindiv.style.display = "block";
      // Set the width after the HTML has been added to the DOM
      if (partynames.length == 1) {
        setTimeout(() => {
          document.getElementById("id0").style.width = "13.215rem";
        }, 0);
      }
      if (partynames.length == 2) {
        setTimeout(() => {
          document.getElementById("id0").style.width = "7.215rem";
        }, 0);
      }
    });
}
function showmap(state) {
  render_state_carousel(state);
  breadcrumbState.style.display = "inline";
  state_map(state_codes[state], state);
  close_btn();
}
function close_btn() {
  document.getElementById("containertool2").style.display = "none";
}














document.getElementById("see-more-btn").addEventListener("click", function () {
  window.location.href = "cardsPage.html";
});
let renderAllianceResults;



async function fetchTop10() {
  try {
    const candidateResponse = await fetch("https://results2024.s3.ap-south-1.amazonaws.com/results.json");
    const candidateData = await candidateResponse.json();
    console.log('Candidate Data:', candidateData);

    function getCandidateDetails(candidateId) {
      const statesData = candidateData[0];
      for (let state in statesData) {
        for (let constituency in statesData[state]) {
          const candidates = statesData[state][constituency].candidates;
          if (candidates) {
            const candidate = candidates.find(candidate => candidate.cId === candidateId);
            if (candidate) {
              candidate.state = state;
              candidate.constituency = constituency;
              return candidate;
            }
          } else {
            console.error('Candidates array is undefined for', state, constituency);
          }
        }
      }
      return null;
    }

    let top10Cand = ["cand260","cand1597","cand5189","cand3140","cand1434","cand7055","cand4116","cand4630","cand6978"];

    for (let i = 0; i < top10Cand.length; i += 2) {
      const row = document.createElement("div");
      row.className = "row raw justify-content-between";
      document.getElementById("root").appendChild(row);

      for (let j = 0; j < 2; j++) {
        const cardIndex = i + j;
        if (cardIndex < top10Cand.length) {
          const candidateDetails = getCandidateDetails(top10Cand[cardIndex]);
          if (candidateDetails) {
            renderCandidateCards(candidateDetails, row);
          } else {
            console.error('Candidate details not found for ID:', top10Cand[cardIndex]);
          }
        }
      }
    }
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }
}

fetchTop10()












function render_state_carousel(state) {
  let heading = document.getElementById("big_fights_heading");
  heading.innerHTML = `BIG FIGHTS (<span class = "heading_state">${state.toUpperCase()}</span>)`;
  let swiperContainer = document.getElementById("slider_div");
  let party_img_json, candidates_data;
  document
    .getElementById("view_all")
    .setAttribute("href", "./bigfights_viewall.html" + "?state=" + state);
  function createSlide(
    const_name,
    state,
    partySymbol1,
    partySymbol2,
    candidateImg1,
    candidateImg2,
    cand_name1,
    cand_name2,
    votes1,
    votes2
  ) {
    let party_path1 =
      partySymbol1 in party_img_json
        ? party_img_json[partySymbol1]
        : party_img_json["default"];
    let party_path2 =
      partySymbol2 in party_img_json
        ? party_img_json[partySymbol2]
        : party_img_json["default"];
    let state_img =
      state.toLowerCase() in party_img_json
        ? party_img_json[state.toLowerCase()]
        : "./imgs2/madhya_pradesh.jpg";
    return `
      <div class="card swiper-slide">
          <span class="state_name">${const_name} <span class="state_party_slot">(${state})</span></span>
          <div class="cand_desc1">
              <span class="img_container">
                  <img class="party_symbol" src=${party_path1} alt="">
                  <img class="cand_img1" src="${candidateImg1}" alt="">
              </span>
              <div class="desc_container">
                  <div class="cand_name1">${cand_name1} <span class="state_party_slot">(${partySymbol1})</span></div>
                  <span class="lead_bar">${votes1}</span>
              </div>
          </div>
          <div class="cand_desc2">
              <span class="img_container">
                  <img class="party_symbol" src="${party_path2}" alt="">
                  <img class="cand_img1" src="${candidateImg2}" alt="">
              </span>
              <div class="desc_container">
                  <div class="cand_name1">${cand_name2} <span class="state_party_slot">(${partySymbol2})</span></div>
                  <span class="trail_bar" >${votes2}</span>
              </div>
          </div>
          <div class="map_container">
              <img class="img_map" src="${state_img}" alt="">
          </div>
          <span class="last_update">Last Updated : 12:10 pm</span>
      </div>
      `;
  }

  fetch("./bigfights.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      party_img_json = data["images_key"];
      candidates_data = data["candidate_details"][state.toLowerCase()];

      // Clear previous content and destroy previous Swiper instance if it exists
      if (swiper) {
        swiper.destroy(true, true);
      }
      swiperContainer.innerHTML = "";
      console.log(candidates_data);
      // function toTitleCase(name) {
      //   return name.split(' ').map(word => {
      //     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      //   }).join(' ');
      // }
      for (const_name in candidates_data) {
        for (let bigf = 0; bigf < candidates_data[const_name].length; bigf++) {
          const slideMarkup = createSlide(
            const_name,
            state,
            candidates_data[const_name][bigf]["party1"],
            candidates_data[const_name][bigf]["party2"],
            "./imgs2/rahul.png",
            "./imgs2/smriti_irani.png",
            candidates_data[const_name][bigf]["name1"],
            candidates_data[const_name][bigf]["name2"],
            "100000",
            "50000"
          );
          swiperContainer.insertAdjacentHTML("beforeend", slideMarkup);
        }
      }
      // candidates_data.forEach(data => {
      //   const slideMarkup = createSlide(data["const_name"], data["state"], data["cand_party1"], data["cand_party2"], data["candidateImg1"], data["candidateImg2"], data["cand_name1"], data["cand_name2"], data["votes1"], data["votes2"]);
      //   swiperContainer.insertAdjacentHTML('beforeend', slideMarkup);
      // });

      swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 1300,
      });

      swiperContainer.addEventListener("mouseenter", function () {
        swiper.autoplay.stop();
      });

      swiperContainer.addEventListener("mouseleave", function () {
        swiper.autoplay.start();
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
