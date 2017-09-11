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

<script type="text/javascript" charset="utf-8" src="js/hokkaido1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hokkaido2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hokkaido3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hokkaido4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hokkaido5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hokkaido6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/aomori.js"></script>
<script type="text/javascript" charset="utf-8" src="js/iwate.js"></script>
<script type="text/javascript" charset="utf-8" src="js/miyagi1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/miyagi2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/miyagi3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/miyagi4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/akita.js"></script>
<script type="text/javascript" charset="utf-8" src="js/yamagata.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hukushima.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ibaragi.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tochigi.js"></script>
<script type="text/javascript" charset="utf-8" src="js/gunma.js"></script>
<script type="text/javascript" charset="utf-8" src="js/saitama.js"></script>
<script type="text/javascript" charset="utf-8" src="js/chiba.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokyo.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kanagawa.js"></script>
<script type="text/javascript" charset="utf-8" src="js/niigata.js"></script>
<script type="text/javascript" charset="utf-8" src="js/toyama.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ishikawa.js"></script>
<script type="text/javascript" charset="utf-8" src="js/fukui.js"></script>
<script type="text/javascript" charset="utf-8" src="js/yamanashi.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagano.js"></script>
<script type="text/javascript" charset="utf-8" src="js/gihu.js"></script>
<script type="text/javascript" charset="utf-8" src="js/shizuoka.js"></script>
<script type="text/javascript" charset="utf-8" src="js/aichi.js"></script>
<script type="text/javascript" charset="utf-8" src="js/shiga.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kyoto.js"></script>
<script type="text/javascript" charset="utf-8" src="js/osaka.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hyogo.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nara.js"></script>
<script type="text/javascript" charset="utf-8" src="js/wakayama.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tottori.js"></script>
<script type="text/javascript" charset="utf-8" src="js/shimane1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/shimane2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/shimane3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/shimane4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/shimane5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/mie.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama7.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama8.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama9.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama10.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama11.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama12.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama13.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama14.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama15.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama16.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama17.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama18.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okayama19.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima7.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima8.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima9.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima10.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima11.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima12.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima13.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima14.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima15.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima16.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima17.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima18.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima19.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima20.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima21.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima22.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima23.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima24.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima25.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima26.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima27.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima28.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima29.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima30.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima31.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hiroshima32.js"></script>
<script type="text/javascript" charset="utf-8" src="js/yamaguchi1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/yamaguchi2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/yamaguchi3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/yamaguchi4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima7.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima8.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima9.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima10.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima11.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima12.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima13.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima14.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima15.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima16.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima17.js"></script>
<script type="text/javascript" charset="utf-8" src="js/tokushima18.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa7.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa8.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa9.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa10.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa11.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa12.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa13.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa14.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa15.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa16.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa17.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa18.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa19.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa20.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa21.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa22.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa23.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa24.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa25.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa26.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa27.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa28.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa29.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa30.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa31.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa32.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa33.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa34.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa35.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa36.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa37.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa38.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa39.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa40.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa41.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa42.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa43.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa44.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa45.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa46.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa47.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa48.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa49.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa50.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa51.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa52.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagawa53.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime7.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime8.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime9.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime10.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime11.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime12.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime13.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime14.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime15.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime16.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime17.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime18.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime19.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime20.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime21.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime22.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime23.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime24.js"></script>
<script type="text/javascript" charset="utf-8" src="js/ehime25.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kochi1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kochi2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/hukuoka.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki7.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki8.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki9.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki10.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki11.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki12.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki13.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki14.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki15.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki16.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki17.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki18.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki19.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki20.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki21.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki22.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki23.js"></script>
<script type="text/javascript" charset="utf-8" src="js/nagasaki24.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kumamoto1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kumamoto2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kumamoto3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kumamoto4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kumamoto5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kumamoto6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kumamoto7.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kumamoto8.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kumamoto9.js"></script>
<script type="text/javascript" charset="utf-8" src="js/saga.js"></script>
<script type="text/javascript" charset="utf-8" src="js/oita.js"></script>
<script type="text/javascript" charset="utf-8" src="js/miyazaki.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima7.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima8.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima9.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima10.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima11.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima12.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima13.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima14.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima15.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima16.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima17.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima18.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima19.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima20.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima21.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima22.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima23.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima24.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima25.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima26.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima27.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima28.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima29.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima30.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima31.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima32.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima33.js"></script>
<script type="text/javascript" charset="utf-8" src="js/kagoshima34.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa1.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa2.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa3.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa4.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa5.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa6.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa7.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa8.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa9.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa10.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa11.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa12.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa13.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa14.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa15.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa16.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa17.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa18.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa19.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa20.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa21.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa22.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa23.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa24.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa25.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa26.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa27.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa28.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa29.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa30.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa31.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa32.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa33.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa34.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa35.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa36.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa37.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa38.js"></script>
<script type="text/javascript" charset="utf-8" src="js/okinawa39.js"></script>

<title>市町村情報可視化マップ | カテゴリと都道府県を選択するページです</title>
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
			var style = {
				"area" : {
					"default" : "dcdcdc"
				},
				"label" : {
					"default" : "696969"
				},
				"border" : {
					"default" : "aaa"
				},
				"bg" : "b0c4de"
			}
			blankmap.setStyle(style, true);

			//レイヤーセット作成
			var layerset = new Y.LayerSet("白地図", [ blankmap ], {
				"maxZoom" : 20,
				"minZoom" : 1
			});

			//レイヤーセット
			map.addLayerSet("blankmap", layerset);

			//地図描画
			map.drawMap(new Y.LatLng(36.0, 138.0), 7, Y.LayerSetId.NORMAL);

			//白地図
			map.setLayerSet("blankmap");

			//都道府県ポリゴンの配列
			var polygons;

			//クリックした都道府県を色付け
			map.bind('click',function(latlng) {
				//ポリゴンは一度全て削除
				map.clearFeatures();

				//都道府県名とコードを初期化
				var name = "";
				var code = "";

				//クリックして得た座標情報をarrayに格納
				var array = latlng.toString().split(",");

				//reverseGeoCoderAPIへpost
				$.getJSON(
					"https://map.yahooapis.jp/geoapi/V1/reverseGeoCoder"
					+ "?callback=?&output=json"
					+ "&appid=dj00aiZpPUlWMUtRcGsxemYzVCZzPWNvbnN1bWVyc2VjcmV0Jng9ODI-",
					{
						lat : array[0],
						lon : array[1]
					})

				.done(function(data) {
					//都道府県名:Nameと都道府県コード:Codeを取得

					//国外を選択時
					if (data.Feature == undefined) {
						return;

					//住居表示外を選択時
					} else if (data.Feature[0].Property.Address == "") {
						return;

					//正常動作時
					} else {
						var name = data.Feature[0].Property.AddressElement[0].Name;
						var code = data.Feature[0].Property.AddressElement[0].Code;
					}

					//都道府県を表示
					showPrefecture(code);

					//都道府県をメニューバーへ表示
					changeText(name,'prefecture_menu');

					//都道府県をinputタグへ設定
					setInputValue(code,'prefecture_input');
				});
			});
		}

		//リスト項目をメニューバーへ表示
		function changeText(text, id) {
			document.getElementById(id).innerHTML = text;
		}
		//リスト項目をinputタグへ設定
		function setInputValue(text, id) {
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
		下のメニューからカテゴリと都道府県を選択してください。<br />
		都道府県は地図をクリックしても選択できます。<br />
		選択したら表示をクリックするとカテゴリ情報が地図へ表示されます。<br />
		<br />
	</p>


	<!-- マップメニュー -->
	<form name="Menu" action="./SelectCategoryServlet" method="post">
		<ul class="mapmenu">

			<!-- カテゴリ選択メニュー -->
			<li><a id="category_menu">カテゴリ</a>
				<ul>
					<c:forEach items="${categories}" var="category">
						<li id="category">
							<a
								onclick="changeText('${category.name}','category_menu');
								setInputValue('${category.id}','category_input');">
									${category.name}
							</a>
						</li>
					</c:forEach>
				</ul></li>

			<!-- 都道府県選択メニュー -->
			<li><a id="prefecture_menu">都道府県 </a>
				<ul>
					<c:forEach items="${prefectures}" var="prefecture">
						<li id="prefecture">
							<a
								onclick="changeText('${prefecture.name}','prefecture_menu');
								map.clearFeatures();
								showPrefecture('${prefecture.id}');
								setInputValue('${prefecture.id}','prefecture_input');">${prefecture.name}
							</a>
						</li>
					</c:forEach>
				</ul></li>

			<!-- 結果表示メニュー -->
			<li>
				<input type="hidden" name="action" value="list">
				<input id="category_input" type="hidden" name="category_id" value="0">
				<input id="prefecture_input" type="hidden" name="prefecture_id" value="">

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