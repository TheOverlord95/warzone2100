function completeResearchOnTime(time, playnum)
{
	for (var tech in allRes)
	{
		if (allRes[tech] <= time)
		{
			completeResearch(tech, playnum);
		}
	}
}

var allRes = {
	"R-Vehicle-Prop-Wheels": 0,
	"R-Sys-Spade1Mk1": 0,
	"R-Vehicle-Body01": 0,
	"R-Comp-SynapticLink": 0,
	"R-Wpn-MG1Mk1": 5,
	"R-Defense-Tower01": 48,
	"R-Wpn-MG-Damage01": 48,
	"R-Sys-Sensor-Turret01": 65,
	"R-Sys-Engineering01": 86,
	"R-Defense-HardcreteWall": 129,
	"R-Defense-TankTrap01": 129,
	"R-Sys-MobileRepairTurret01": 129,
	"R-Wpn-Flamer01Mk1": 129,
	"R-Sys-Sensor-Tower01": 129,
	"R-Wpn-MG-Damage02": 134,
	"R-Vehicle-Engine01": 172,
	"R-Vehicle-Prop-Halftracks": 172,
	"R-Wpn-Flamer-Damage01": 172,
	"R-Wpn-Cannon1Mk1": 176,
	"R-Struc-Factory-Cyborg": 215,
	"R-Defense-Pillbox01": 215,
	"R-Defense-WallUpgrade01": 215,
	"R-Struc-CommandRelay": 215,
	"R-Sys-Sensor-Tower02": 215,
	"R-Wpn-MG2Mk1": 219,
	"R-Defense-Pillbox05": 241,
	"R-Struc-PowerModuleMk1": 258,
	"R-Wpn-Rocket05-MiniPod": 258,
	"R-Wpn-Flamer-Damage02": 258,
	"R-Defense-HardcreteGate": 262,
	"R-Wpn-Cannon-Damage01": 262,
	"R-Defense-Pillbox04": 284,
	"R-Defense-WallTower02": 284,
	"R-Struc-Materials01": 301,
	"R-Comp-CommandTurret01": 301,
	"R-Struc-Research-Module": 301,
	"R-Sys-MobileRepairTurretHvy": 304,
	"R-Wpn-Flamer-ROF01": 315,
	"R-Vehicle-Engine02": 329,
	"R-Wpn-Rocket-Damage01": 329,
	"R-Struc-Research-Upgrade01": 358,
	"R-Defense-WallUpgrade02": 360,
	"R-Wpn-MG-Damage03": 360,
	"R-Wpn-Flamer-Damage03": 381,
	"R-Wpn-Cannon-Damage02": 384,
	"R-Struc-Factory-Module": 384,
	"R-Defense-Tower06": 395,
	"R-Struc-Materials02": 404,
	"R-Wpn-AAGun03": 407,
	"R-Wpn-Rocket-Damage02": 427,
	"R-Cyborg-Metals01": 430,
	"R-Vehicle-Body05": 430,
	"R-Struc-Research-Upgrade02": 451,
	"R-Wpn-MG3Mk1": 453,
	"R-Vehicle-Metals01": 453,
	"R-Struc-Factory-Upgrade01": 472,
	"R-Struc-RepairFacility": 472,
	"R-Wpn-Mortar01Lt": 472,
	"R-Defense-AASite-QuadMg1": 491,
	"R-Vehicle-Body04": 492,
	"R-Defense-WallUpgrade03": 509,
	"R-Wpn-Rocket02-MRL": 509,
	"R-Vehicle-Prop-Hover": 511,
	"R-Wpn-Cannon2Mk1": 511,
	"R-Cyborg-Metals02": 511,
	"R-Defense-MortarPit": 511,
	"R-Wpn-Cannon-Accuracy01": 520,
	"R-Wpn-Cannon-Damage03": 520,
	"R-Vehicle-Engine03": 528,
	"R-Struc-Materials03": 528,
	"R-Wpn-Mortar-Damage01": 530,
	"R-Defense-WallTower01": 530,
	"R-Wpn-Rocket-Accuracy01": 547,
	"R-Wpn-Rocket-Damage03": 547,
	"R-Defense-MRL": 548,
	"R-Wpn-Rocket-ROF01": 550,
	"R-Struc-Research-Upgrade03": 567,
	"R-Vehicle-Metals02": 569,
	"R-Defense-WallTower03": 569,
	"R-Struc-RprFac-Upgrade01": 569,
	"R-Wpn-MG-ROF01": 585,
	"R-Wpn-MG-Damage04": 602,
	"R-Wpn-AAGun-Damage01": 602,
	"R-Wpn-Flamer-Damage04": 617,
	"R-Cyborg-Metals03": 619,
	"R-Wpn-Mortar-Acc01": 636,
	"R-Wpn-Mortar-Damage02": 636,
	"R-Vehicle-Body08": 636,
	"R-Vehicle-Body11": 636,
	"R-Vehicle-Prop-Tracks": 636,
	"R-Wpn-Rocket01-LtAT": 650,
	"R-Wpn-Cannon4AMk1": 667,
	"R-Wpn-Rocket-ROF02": 686,
	"R-Defense-Pillbox06": 692,
	"R-Defense-WallTower06": 692,
	"R-Wpn-Cannon-Damage04": 694,
	"R-Vehicle-Prop-VTOL": 700,
	"R-Struc-Research-Upgrade04": 701,
	"R-Wpn-AAGun-ROF01": 702,
	"R-Wpn-MG-ROF02": 717,
	"R-Vehicle-Metals03": 717,
	"R-Cyborg-Armor-Heat01": 717,
	"R-Vehicle-Body12": 732,
	"R-Sys-Sensor-Upgrade01": 745,
	"R-Defense-Emplacement-HPVcannon": 750,
	"R-Wpn-Rocket-Damage04": 774,
	"R-Wpn-Rocket03-HvAT": 774,
	"R-Defense-WallTower-HPVcannon": 789,
	"R-Wpn-AAGun-Damage02": 790,
	"R-Wpn-Cannon-ROF01": 792,
	"R-Sys-RadarDetector01": 794,
	"R-Wpn-Flame2": 803,
	"R-Wpn-Sunburst": 803,
	"R-Wpn-MG-Damage05": 803,
	"R-Struc-Factory-Upgrade04": 808,
	"R-Sys-Engineering02": 818,
	"R-Wpn-Cannon-Accuracy02": 818,
	"R-Wpn-AAGun01": 818,
	"R-Wpn-AAGun-ROF02": 819,
	"R-Wpn-Mortar02Hvy": 819,
	"R-Wpn-Mortar3": 819,
	"R-Wpn-Mortar-Acc02": 823,
	"R-Wpn-Mortar-Damage03": 832,
	"R-Vehicle-Armor-Heat01": 834,
	"R-Cyborg-Armor-Heat02": 834,
	"R-Wpn-Bomb01": 835,
	"R-Cyborg-Metals04": 838,
	"R-Struc-VTOLFactory": 847,
	"R-Struc-Power-Upgrade01": 847,
	"R-Struc-Research-Upgrade05": 847,
	"R-Wpn-Flamer-Damage05": 851,
	"R-Defense-Sunburst": 860,
	"R-Sys-CBSensor-Turret01": 861,
	"R-Wpn-Cannon-Damage05": 868,
	"R-Vehicle-Engine04": 869,
	"R-Wpn-Mortar-ROF01": 873,
	"R-Defense-AASite-QuadBof": 873,
	"R-Wpn-MG-ROF03": 875,
	"R-Defense-RotMor": 878,
	"R-Defense-HvyMor": 878,
	"R-Wpn-Rocket-Accuracy02": 886,
	"R-Vehicle-Metals04": 896,
	"R-Defense-HvyFlamer": 900,
	"R-Wpn-Rocket-Damage05": 912,
	"R-Wpn-Rocket-ROF03": 914,
	"R-Struc-VTOLPad": 926,
	"R-Cyborg-Hvywpn-Mcannon": 926,
	"R-Sys-Sensor-Upgrade02": 926,
	"R-Defense-WallTower-DoubleAAgun": 926,
	"R-Wpn-Flamer-ROF02": 938,
	"R-Cyborg-Transport": 939,
	"R-Sys-CBSensor-Tower01": 939,
	"R-Struc-RprFac-Upgrade04": 943,
	"R-Wpn-Cannon-ROF02": 943,
	"R-Defense-WallUpgrade04": 952,
	"R-Wpn-Mortar-Incendiary": 965,
	"R-Cyborg-Armor-Heat03": 966,
	"R-Wpn-Cannon5": 972,
	"R-Wpn-AAGun-Damage03": 979,
	"R-Wpn-MG4": 979,
	"R-Struc-Power-Upgrade01b": 982,
	"R-Vehicle-Armor-Heat02": 988,
	"R-Wpn-Bomb-Damage01": 993,
	"R-Wpn-Bomb03": 993,
	"R-Wpn-Mortar-ROF02": 1004,
	"R-Cyborg-Metals05": 1004,
	"R-Wpn-MG-Damage06": 1008,
	"R-Cyborg-Hvywpn-HPV": 1013,
	"R-Wpn-RocketSlow-Accuracy01": 1017,
	"R-Wpn-Rocket06-IDF": 1017,
	"R-Defense-MortarPit-Incendiary": 1017,
	"R-Struc-Research-Upgrade06": 1022,
	"R-SuperTransport": 1026,
	"R-Vehicle-Body02": 1027,
	"R-Struc-VTOLPad-Upgrade01": 1029,
	"R-Wpn-Mortar-Damage04": 1033,
	"R-Wpn-Mortar-Acc03": 1037,
	"R-Wpn-Cannon-Damage06": 1048,
	"R-Defense-RotMG": 1054,
	"R-Wpn-Cannon3Mk1": 1056,
	"R-Cyborg-Hvywpn-Acannon": 1056,
	"R-Vehicle-Engine05": 1061,
	"R-Wpn-Rocket-Damage06": 1065,
	"R-Defense-Wall-VulcanCan": 1072,
	"R-Sys-VTOLStrike-Turret01": 1076,
	"R-Struc-Materials04": 1077,
	"R-Wpn-Flamer-Damage06": 1088,
	"R-Vehicle-Metals05": 1097,
	"R-Defense-WallTower04": 1103,
	"R-Wpn-Flamer-ROF03": 1104,
	"R-Struc-Power-Upgrade01c": 1104,
	"R-Wpn-Cannon-ROF03": 1108,
	"R-Defense-IDFRocket": 1112,
	"R-Defense-WallUpgrade05": 1116,
	"R-Defense-Wall-RotMg": 1125,
	"R-Wpn-Mortar-ROF03": 1129,
	"R-Wpn-Bomb02": 1137,
	"R-Struc-VTOLPad-Upgrade02": 1147,
	"R-Wpn-RocketSlow-Accuracy02": 1159,
	"R-Wpn-Cannon6TwinAslt": 1166,
	"R-Vehicle-Body06": 1168,
	"R-Vehicle-Armor-Heat03": 1168,
	"R-Wpn-AAGun04": 1174,
	"R-Wpn-Bomb04": 1176,
	"R-Wpn-Bomb-Damage02": 1194,
	"R-Cyborg-Metals06": 1194,
	"R-Wpn-MG5": 1198,
	"R-Wpn-Rocket07-Tank-Killer": 1206,
	"R-Wpn-MG-Damage07": 1206,
	"R-Wpn-HowitzerMk1": 1210,
	"R-Wpn-Mortar-Damage05": 1215,
	"R-Sys-VTOLStrike-Tower01": 1218,
	"R-Struc-Research-Upgrade07": 1218,
	"R-Wpn-Rocket-Damage07": 1228,
	"R-Struc-Materials05": 1232,
	"R-Wpn-Cannon-Damage07": 1235,
	"R-Sys-VTOLCBS-Turret01": 1239,
	"R-Wpn-PlasmaCannon": 1254,
	"R-Wpn-Mortar-ROF04": 1255,
	"R-Defense-AASite-QuadRotMg": 1264,
	"R-Vehicle-Engine06": 1271,
	"R-Wpn-AAGun-Accuracy01": 1271,
	"R-Defense-Super-Cannon": 1275,
	"R-Defense-Cannon6": 1285,
	"R-Wpn-AAGun-ROF03": 1285,
	"R-Defense-WallTower-TwinAGun": 1286,
	"R-Cyborg-Hvywpn-TK": 1288,
	"R-Defense-HvyA-Trocket": 1293,
	"R-Defense-Howitzer": 1296,
	"R-Struc-VTOLPad-Upgrade03": 1297,
	"R-Defense-WallTower-HvyA-Trocket": 1297,
	"R-Defense-WallUpgrade06": 1304,
	"R-Vehicle-Metals06": 1315,
	"R-Wpn-Howitzer-Damage01": 1318,
	"R-Comp-CommandTurret02": 1318,
	"R-Vehicle-Body09": 1323,
	"R-Wpn-Howitzer-Accuracy01": 1339,
	"R-Cyborg-Armor-Heat04": 1340,
	"R-Sys-Sensor-Upgrade03": 1347,
	"R-Wpn-Plasmite-Flamer": 1347,
	"R-Sys-VTOLCBS-Tower01": 1368,
	"R-Struc-Power-Upgrade02": 1379,
	"R-Wpn-Mortar-Damage06": 1384,
	"R-Wpn-Howitzer-Incendiary": 1389,
	"R-Wpn-Howitzer03-Rot": 1389,
	"R-Defense-WallTower-QuadRotAA": 1393,
	"R-Wpn-AAGun02": 1397,
	"R-Wpn-Rocket-Damage08": 1400,
	"R-Cyborg-Metals07": 1404,
	"R-Wpn-AAGun-Damage04": 1406,
	"R-Wpn-Bomb-Damage03": 1407,
	"R-Struc-Materials06": 1411,
	"R-Wpn-Cannon-ROF04": 1414,
	"R-Wpn-MG-Damage08": 1415,
	"R-Defense-PlasmiteFlamer": 1418,
	"R-Wpn-Cannon-Damage08": 1428,
	"R-Struc-Research-Upgrade08": 1432,
	"R-Wpn-Howitzer-Damage02": 1458,
	"R-Wpn-AAGun-Accuracy02": 1465,
	"R-Struc-VTOLPad-Upgrade04": 1472,
	"R-Wpn-Laser01": 1472,
	"R-Defense-RotHow": 1475,
	"R-Defense-AASite-QuadBof02": 1479,
	"R-Defense-Howitzer-Incendiary": 1482,
	"R-Wpn-RailGun01": 1487,
	"R-Sys-Sensor-WS": 1491,
	"R-Wpn-Howitzer-Accuracy02": 1498,
	"R-Defense-PlasmaCannon": 1505,
	"R-Vehicle-Armor-Heat04": 1505,
	"R-Wpn-Missile2A-T": 1508,
	"R-Cyborg-Armor-Heat05": 1511,
	"R-Defense-WallTower-DoubleAAgun02": 1518,
	"R-Wpn-AAGun-ROF04": 1546,
	"R-Vehicle-Metals07": 1548,
	"R-Wpn-Flamer-Damage07": 1570,
	"R-Wpn-Rocket-Damage09": 1580,
	"R-Struc-Power-Upgrade03": 1580,
	"R-Wpn-AAGun-Damage05": 1586,
	"R-Cyborg-Hvywpn-A-T": 1590,
	"R-Sys-Engineering03": 1590,
	"R-Defense-Super-Rocket": 1600,
	"R-Wpn-AAGun-Accuracy03": 1603,
	"R-Defense-GuardTower-Rail1": 1606,
	"R-Wpn-Cannon-ROF05": 1612,
	"R-Wpn-Howitzer-Damage03": 1623,
	"R-Wpn-Cannon-Damage09": 1625,
	"R-Defense-GuardTower-ATMiss": 1626,
	"R-Defense-WallTower-A-Tmiss": 1626,
	"R-Cyborg-Metals08": 1629,
	"R-Struc-Research-Upgrade09": 1662,
	"R-Sys-Autorepair-General": 1668,
	"R-Wpn-EMPCannon": 1668,
	"R-Struc-VTOLPad-Upgrade05": 1671,
	"R-Wpn-Howitzer-Accuracy03": 1680,
	"R-Wpn-Bomb05": 1680,
	"R-Wpn-HvyHowitzer": 1692,
	"R-Defense-PrisLas": 1705,
	"R-Wpn-Energy-Accuracy01": 1705,
	"R-Cyborg-Armor-Heat06": 1705,
	"R-Wpn-AAGun-ROF05": 1707,
	"R-Vehicle-Armor-Heat05": 1715,
	"R-Wpn-Rail-Damage01": 1719,
	"R-Wpn-MdArtMissile": 1738,
	"R-Wpn-Missile-ROF01": 1738,
	"R-Wpn-Missile-LtSAM": 1738,
	"R-Struc-RprFac-Upgrade06": 1747,
	"R-Sys-Sensor-WSTower": 1753,
	"R-Vehicle-Engine07": 1754,
	"R-Struc-Power-Upgrade03a": 1768,
	"R-Wpn-AAGun-Damage06": 1774,
	"R-Vehicle-Body03": 1775,
	"R-Defense-WallUpgrade07": 1778,
	"R-Defense-EMPCannon": 1778,
	"R-Defense-HvyHowitzer": 1783,
	"R-Vehicle-Metals08": 1793,
	"R-Wpn-Flamer-Damage08": 1808,
	"R-Sys-Resistance-Circuits": 1814,
	"R-Sys-SpyTurret": 1814,
	"R-Struc-Factory-Upgrade07": 1826,
	"R-Wpn-Cannon-ROF06": 1828,
	"R-Defense-SamSite1": 1857,
	"R-Cyborg-Metals09": 1868,
	"R-Struc-VTOLPad-Upgrade06": 1883,
	"R-Wpn-AAGun-ROF06": 1889,
	"R-Wpn-Howitzer-Damage04": 1911,
	"R-Wpn-Howitzer-ROF01": 1911,
	"R-Cyborg-Armor-Heat07": 1917,
	"R-Wpn-Laser02": 1923,
	"R-Sys-SpyTower": 1923,
	"R-Wpn-Energy-Damage01": 1925,
	"R-Wpn-Rail-Accuracy01": 1937,
	"R-Vehicle-Armor-Heat06": 1942,
	"R-Wpn-Missile-Damage01": 1956,
	"R-Struc-Materials07": 1960,
	"R-Defense-MdArtMissile": 1966,
	"R-Defense-WallUpgrade08": 1990,
	"R-Cyborg-Hvywpn-PulseLsr": 1999,
	"R-Defense-WallTower-SamSite": 2020,
	"R-Sys-Sensor-UpLink": 2032,
	"R-Wpn-Bomb06": 2047,
	"R-Vehicle-Metals09": 2060,
	"R-Wpn-Flamer-Damage09": 2069,
	"R-Wpn-MortarEMP": 2105,
	"R-Struc-Factory-Upgrade09": 2117,
	"R-Defense-PulseLas": 2141,
	"R-Defense-WallTower-PulseLas": 2141,
	"R-Wpn-Energy-ROF01": 2144,
	"R-Wpn-Rail-Damage02": 2155,
	"R-Wpn-Rail-ROF01": 2156,
	"R-Cyborg-Armor-Heat08": 2160,
	"R-Struc-Materials08": 2172,
	"R-Wpn-Missile-ROF02": 2175,
	"R-Wpn-Missile-Accuracy01": 2175,
	"R-Vehicle-Armor-Heat07": 2200,
	"R-Defense-EMPMortar": 2214,
	"R-Vehicle-Body07": 2230,
	"R-Defense-WallUpgrade09": 2233,
	"R-Wpn-HeavyPlasmaLauncher": 2244,
	"R-Wpn-Howitzer-ROF02": 2347,
	"R-Wpn-Howitzer-Damage05": 2349,
	"R-Wpn-Energy-Damage02": 2362,
	"R-Wpn-Missile-Damage02": 2393,
	"R-Struc-Materials09": 2415,
	"R-Cyborg-Armor-Heat09": 2433,
	"R-Vehicle-Engine08": 2457,
	"R-Wpn-HvyLaser": 2471,
	"R-Vehicle-Armor-Heat08": 2488,
	"R-Defense-WallUpgrade10": 2506,
	"R-Wpn-AALaser": 2580,
	"R-Wpn-Energy-ROF02": 2580,
	"R-Wpn-Rail-ROF02": 2592,
	"R-Wpn-RailGun02": 2596,
	"R-Wpn-Missile-Accuracy02": 2611,
	"R-Cyborg-Hvywpn-RailGunner": 2680,
	"R-Defense-HeavyPlasmaLauncher": 2681,
	"R-Defense-Rail2": 2748,
	"R-Defense-HeavyLas": 2780,
	"R-Vehicle-Armor-Heat09": 2806,
	"R-Defense-AA-Laser": 2811,
	"R-Defense-WallTower-Rail2": 2815,
	"R-Wpn-HvArtMissile": 2830,
	"R-Defense-WallUpgrade11": 2839,
	"R-Wpn-Missile-ROF03": 2854,
	"R-Vehicle-Body10": 2885,
	"R-Wpn-LasSat": 2890,
	"R-Wpn-Howitzer-ROF03": 3002,
	"R-Wpn-Howitzer-Damage06": 3004,
	"R-Wpn-Energy-Damage03": 3017,
	"R-Wpn-Missile-Damage03": 3048,
	"R-Vehicle-Engine09": 3142,
	"R-Defense-WallUpgrade12": 3203,
	"R-Wpn-Energy-ROF03": 3235,
	"R-Wpn-Rail-ROF03": 3247,
	"R-Wpn-Rail-Damage03": 3251,
	"R-Defense-HvyArtMissile": 3266,
	"R-Wpn-Missile-HvSAM": 3484,
	"R-Defense-Super-Missile": 3612,
	"R-Defense-SamSite2": 3703,
	"R-Defense-WallTower-SamHvy": 3757,
	"R-Wpn-Howitzer-ROF04": 3860,
	"R-Vehicle-Body13": 3900,
	"R-Wpn-RailGun03": 3906,
	"R-Defense-Rail3": 4058,
	"R-Defense-WallTower-Rail3": 4124,
	"R-Defense-MassDriver": 4664,
	"R-Vehicle-Body14": 4734
};
