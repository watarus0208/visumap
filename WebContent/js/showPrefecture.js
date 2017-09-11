function showPrefecture(code) {
	switch (code) {
	case "01":
		polygons = [ new Y.Polygon(hokkaido1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hokkaido2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hokkaido3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hokkaido4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hokkaido5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hokkaido6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "02":
		polygons = [ new Y.Polygon(aomori, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "03":
		polygons = [ new Y.Polygon(iwate, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "04":
		polygons = [ new Y.Polygon(miyagi1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(miyagi2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(miyagi3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(miyagi4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "05":
		polygons = [ new Y.Polygon(akita, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "06":
		polygons = [ new Y.Polygon(yamagata, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "07":
		polygons = [ new Y.Polygon(hukushima, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "08":
		polygons = [ new Y.Polygon(ibaragi, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "09":
		polygons = [ new Y.Polygon(tochigi, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "10":
		polygons = [ new Y.Polygon(gunma, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "11":
		polygons = [ new Y.Polygon(saitama, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "12":
		polygons = [ new Y.Polygon(chiba, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "13":
		polygons = [ new Y.Polygon(tokyo, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "14":
		polygons = [ new Y.Polygon(kanagawa, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "15":
		polygons = [ new Y.Polygon(niigata, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "16":
		polygons = [ new Y.Polygon(toyama, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "17":
		polygons = [ new Y.Polygon(ishikawa, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "18":
		polygons = [ new Y.Polygon(fukui, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "19":
		polygons = [ new Y.Polygon(yamanashi, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "20":
		polygons = [ new Y.Polygon(nagano, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "21":
		polygons = [ new Y.Polygon(gihu, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "22":
		polygons = [ new Y.Polygon(shizuoka, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "23":
		polygons = [ new Y.Polygon(aichi, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "24":
		polygons = [ new Y.Polygon(mie, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "25":
		polygons = [ new Y.Polygon(shiga, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "26":
		polygons = [ new Y.Polygon(kyoto, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "27":
		polygons = [ new Y.Polygon(osaka, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "28":
		polygons = [ new Y.Polygon(hyogo, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "29":
		polygons = [ new Y.Polygon(nara, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "30":
		polygons = [ new Y.Polygon(wakayama, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "31":
		polygons = [ new Y.Polygon(tottori, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "32":
		polygons = [ new Y.Polygon(shimane1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(shimane2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(shimane3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(shimane4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(shimane5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "33":
		polygons = [ new Y.Polygon(okayama1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama7, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama8, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama9, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama10, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama11, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama12, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama13, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama14, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama15, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama16, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama17, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama18, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okayama19, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "34":
		polygons = [ new Y.Polygon(hiroshima1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima7, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima8, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima9, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima10, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima11, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima12, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima13, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima14, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima15, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima16, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima17, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima18, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima20, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima21, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima22, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima23, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima24, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima25, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima26, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima27, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima28, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima29, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima30, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima31, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(hiroshima32, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "35":
		polygons = [ new Y.Polygon(yamaguchi1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(yamaguchi2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(yamaguchi3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(yamaguchi4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "36":
		polygons = [ new Y.Polygon(tokushima1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima7, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima8, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima9, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima10, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima11, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima12, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima13, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima14, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima15, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima16, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima17, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(tokushima18, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "37":
		polygons = [ new Y.Polygon(kagawa1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa7, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa8, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa9, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa10, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa11, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa12, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa13, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa14, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa15, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa16, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa17, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa18, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa19, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa20, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa21, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa22, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa23, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa24, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa25, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa26, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa27, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa28, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa29, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa30, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa31, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa32, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa33, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa34, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa35, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa36, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa37, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa38, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa39, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa40, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa41, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa42, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa43, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa44, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa45, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa46, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa47, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa48, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa49, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa50, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa51, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa52, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagawa53, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "38":
		polygons = [ new Y.Polygon(ehime1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime7, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime8, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime9, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime10, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime11, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime12, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime13, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime14, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime15, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime16, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime17, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime18, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime19, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime20, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime21, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime22, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime23, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime24, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(ehime25, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "39":
		polygons = [ new Y.Polygon(kochi1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kochi2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "40":
		polygons = [ new Y.Polygon(hukuoka, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "41":
		polygons = [ new Y.Polygon(saga, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "42":
		polygons = [ new Y.Polygon(nagasaki1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki7, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki8, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki9, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki10, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki11, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki12, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki13, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki14, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki15, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki16, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki17, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki18, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki19, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki20, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki21, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki22, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki23, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(nagasaki24, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "43":
		polygons = [ new Y.Polygon(kumamoto1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kumamoto2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kumamoto3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kumamoto4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kumamoto5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kumamoto6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kumamoto7, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kumamoto8, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kumamoto9, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "44":
		polygons = [ new Y.Polygon(oita, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "45":
		polygons = [ new Y.Polygon(miyazaki, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	case "46":
		polygons = [ new Y.Polygon(kagoshima1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima7, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima8, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima9, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima10, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima11, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima12, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima13, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima14, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima15, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima16, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima17, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima18, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima19, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima20, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima21, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima22, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima23, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima24, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima25, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima26, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima27, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima28, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima29, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima30, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima31, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima32, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima33, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(kagoshima34, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), ];
		break;
	case "47":
		polygons = [ new Y.Polygon(okinawa1, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa2, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa3, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa4, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa5, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa6, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa7, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa8, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa9, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa10, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa11, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa12, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa13, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa14, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa15, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa16, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa17, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa18, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa19, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa20, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa21, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa22, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa23, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa24, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa25, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa26, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa27, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa28, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa29, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa30, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa31, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa32, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa33, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa34, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa35, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa36, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa37, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa38, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}), new Y.Polygon(okinawa39, {
			strokeStyle : new Y.Style("000000", 0, 0),
			fillStyle : new Y.Style("00ff00", null, 0.2)
		}) ];
		break;
	default:
		break;
	}

	map.addFeatures(polygons);
}