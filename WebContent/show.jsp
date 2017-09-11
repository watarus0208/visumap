<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />

<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Oswald:700">
<link rel="stylesheet"
	href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
<script type="text/javascript" charset="utf-8"
	src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
<!--jQuery Migrateを有効化-->
<script src="https://code.jquery.com/jquery-migrate-3.0.0.min.js"></script>
<script type="text/javascript" charset="utf-8"
	src="https://map.yahooapis.jp/js/V1/jsapi?appid=dj00aiZpPTFJbU1lWGk0bjBuNiZzPWNvbnN1bWVyc2VjcmV0Jng9MmY-"></script>
<script type="text/javascript" charset="utf-8"
	src="js/showPrefecture.js"></script>

<title>市町村情報可視化マップ | 結果を地図へ表示するページです</title>
</head>
<body>

	<script type="text/javascript">
	var map; //YOLP地図オブジェクト
	var blankmap; //白地図レイヤー

	//window.onloadイベント・地図の読込処理
	window.onload = function() {
		map = new Y.Map("map", {
			"configure" : {
				"scrollWheelZoom" : true
			}
		});
		map.addControl(new Y.SliderZoomControlHorizontal());

		//白地図レイヤー作成
		blankmap = new Y.BlankMapLayer();
		setStyle();

		//レイヤーセット作成
		var layerset = new Y.LayerSet("白地図", [ blankmap ], {
			"maxZoom" : 20,
			"minZoom" : 1
		});

		//レイヤーセット
		map.addLayerSet("blankmap", layerset);

		//地図描画
		map.drawMap(new Y.LatLng('${statData.longitude}','${statData.latitude}'), 10, Y.LayerSetId.NORMAL);

		//白地図
		map.setLayerSet("blankmap");
	}

	//都道府県にカラーを設定
	function setStyle() {
		var style = { "area" : { "default" : "dcdcdc"
				<c:forEach items="${statData.taxDataList}" var="data">
					,"${data.id}" : "${data.colorCode}"
				</c:forEach>
				}, "label" : { "default" : "696969" }, "border" : { "default" : "aaa"}, "bg" : "b0c4de" };
		blankmap.setStyle(style, true);
	}

	//クリックしたリスト項目をメニューバーへ表示
	function changeText(text,id) {
		document.getElementById(id).innerHTML = text;
	}

	//クリックしたリスト項目をinputタグへ設定
	function setInputValue(text,id){
		document.getElementById(id).value = text;
	}
</script>

	<!-- タイトルとメニュー -->
	<%@ include file="/header.jsp"%>


	<!-- 本文 -->
	<h2 class="section1">
		<i class="fa fa-map-marker"></i> 市町村情報可視化マップ
	</h2>
	<p style="border-bottom: 1px solid #999999;"></p>


	<h3 class="section2">使い方</h3>
	<p class="sentence">
		下のメニューからカテゴリと都道府県を選択してください。<br /> 選択したら表示をクリックするとカテゴリ情報が地図へ表示されます。<br />
		<br />
	</p>


	<!-- マップメニュー -->
	<form name="Menu" action="./SelectCategoryServlet" method="post">
		<ul class="mapmenu">

			<!-- カテゴリ選択メニュー -->
			<li><a id="category_menu"> ${category.name} </a>
				<ul>
					<c:forEach items="${categories}" var="category">
						<li id="category">
							<a
								onclick="changeText('${category.name}','category_menu');
								setInputValue('${category.id}','category_input');">${category.name}
							</a>
						</li>
					</c:forEach>
				</ul></li>

			<!-- 都道府県選択メニュー -->
			<li><a id="prefecture_menu"> ${prefecture.name} </a>
				<ul>
					<c:forEach items="${prefectures}" var="prefecture">
						<li id="prefecture">
							<a
								onclick="changeText('${prefecture.name}','prefecture_menu');
								map.clearFeatures();
								setInputValue('${prefecture.id}','prefecture_input');">${prefecture.name}
							</a>
						</li>
					</c:forEach>
				</ul></li>

			<!-- 結果表示メニュー -->
			<li>
				<input type="hidden" name="action" value="list">
				<input id="category_input" type="hidden" name="category_id" value="${category.id}">
				<input id="prefecture_input" type="hidden" name="prefecture_id" value="${prefecture.id}">

				<a href="javascript:document.Menu.submit()" style="text-decoration: none">
					表 示
				</a>
			</li>
		</ul>
	</form>


	<!-- マップ -->
	<div class="map">
		<div id="map" style="width: 960px; height: 640px"></div>
	</div>

	<noscript>
		<div>ブラウザのJavaScriptが無効となっています。正常に動作しない可能性があります。</div>
	</noscript>


	<!-- フッター -->
	<%@ include file="/footer.jsp"%>
</body>
</html>