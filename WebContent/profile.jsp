<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Oswald:700">

<title>プロフィール | プロフィールと制作により習得した事柄についてする説明します</title>
</head>

<body>
	<!-- タイトルとメニュー -->
	<%@ include file="/header.jsp"%>

	<h2 style="margin-top: 2.0em; padding-left: 30px;">
		<a title="市町村別の税情報をWebブラウザ上で可視化するアプリ"
			href="/SelectCategoryServlet?action=top" target="_blank"
			style="text-decoration: none">市町村情報可視化マップ</a>
	</h2>

	<p style="border-bottom: 1px solid #999999;"></p>


	<h3 style="margin-top: 1.5em; padding-left: 60px;">プログラムの概要</h3>
	<p style="margin-top: 0.5em; padding-left: 90px; line-height: 150%;">
		「カテゴリ」と「都道府県」を選択することで、市町村毎に統計データを地図へ表示します。<br />
		本アプリケーションでは税情報に注目し、地図へ色の濃淡を表示することで直感的に地域の特色を比較できるようにしています。<br />
	</p>

	<h3 style="margin-top: 1.5em; padding-left: 60px;">プログラムの目的</h3>
	<p style="margin-top: 0.5em; padding-left: 90px; line-height: 150%;">
		税金は地域の一つの指標であり、比較することでその地域の特色が掴めるのではないかと考えました。<br />
		このアプリケーションでは地域の特色を視覚的に把握することを目的としています。<br />
		このアプリケーションを通じて、何か面白い新たな発見が有れば良いなと考えています。<br />
	</p>

	<h3 style="margin-top: 1.5em; padding-left: 60px;">製作期間</h3>
	<p style="margin-top: 0.5em; padding-left: 90px; line-height: 150%;">
		2017/6/1～現在まで<br />
	</p>

	<h3 style="margin-top: 1.5em; padding-left: 60px;">開発環境</h3>
	<p style="margin-top: 0.5em; padding-left: 90px; line-height: 150%;">
		Windows10<br /> Java version: 1.8.0_74<br /> Apache Maven 3.3.3<br />
		Eclipse Mars.2 Release<br /> Heroku <br /> <br />
	</p>

</body>
</html>
