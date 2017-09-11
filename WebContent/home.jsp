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
<link rel="stylesheet"
	href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">

<title>ホーム | 制作した作品に関する概要を説明します</title>
</head>

<body>
	<!-- タイトルとメニュー -->
	<%@ include file="/header.jsp"%>


	<!-- 本文 -->
	<div class="box">
		<h2 class="section1">
			<i class="fa fa-map-marker"></i> 市町村情報可視化マップ
		</h2>
	</div>
	<div class="box" style="margin: 0 0 0 -500px; padding: 0 0 0 500px;">
		<a class="button" href="/SelectCategoryServlet?action=top">
			<i class="fa fa-chevron-circle-right"></i> マップへGO
		</a>
	</div>
	<p style="border-bottom: 1px solid #999999;"></p>


	<h3 class="section2">プログラムの概要</h3>
	<p class="sentence">
		「カテゴリ」と「都道府県」を選択することで、市町村毎に統計データを地図へ表示します。<br />
		本アプリケーションでは税情報に注目し、地図へ色の濃淡を表示することで直感的に地域の特色を比較できるようにしています。<br />
	</p>

	<h3 class="section2">プログラムの目的</h3>
	<p class="sentence">
		税金は地域の一つの指標であり、比較することでその地域の特色が掴めるのではないかと考えました。<br />
		このアプリケーションでは地域の特色を視覚的に把握することを目的としています。<br />
		誰もが関係する税金や地域の状況を目で見ることで新たな発見があれば良いなと考えています。<br />
		追加しているカテゴリ項目がまだまだ少ないですが、今後さらにデータを追加していく予定です。<br />
	</p>

	<h3 class="section2">製作期間</h3>
	<p class="sentence">
		2017/6/1～現在まで<br />
	</p>

	<h3 class="section2">開発環境</h3>

	<table>
		<tr>
			<th width="150">種 類</th>
			<th width="400">名 称</th>
			<th width="200">備 考</th>
		</tr>
		<tr>
			<td>OS</td>
			<td>Windows10Pro 64bit</td>
			<td></td>
		</tr>
		<tr>
			<td>統合開発環境</td>
			<td>Eclipse Mars.2 Release (Apache Maven 3.3.3)</td>
			<td>JSTL 1.2</td>
		</tr>
		<tr>
			<td>開発言語</td>
			<td>Java, Javascript</td>
			<td>Java version: 1.8.0_74</td>
		</tr>
		<tr>
			<td>データベース</td>
			<td>Heroku PostgreSQL 9.6.3</td>
			<td></td>
		</tr>
		<tr>
			<td>クラウドサーバ</td>
			<td>Heroku（Tomcatバージョン8.x)</td>
			<td>Hobby Dev</td>
		</tr>
		<tr>
			<td>API</td>
			<td>e-StatAPI<br /> Yahoo! JavaScriptマップAPI<br />
				Yahoo!リバースジオコーダAPI
			</td>
			<td></td>
		</tr>
	</table>

	<h3 class="section2">ソースコード</h3>
	<p class="sentence">
		ソースコードはGitHubにて公開しています。 [リンク貼り付け予定] <br />
	</p>


	<!-- フッター -->
	<%@ include file="/footer.jsp"%>

</body>
</html>
