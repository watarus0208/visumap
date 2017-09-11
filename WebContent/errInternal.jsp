<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Error Page</title>
</head>
<body>
<h4>エラーが発生しました。<br/>
エラーメッセージ：${message}
Topへ戻り、再度やり直してください。
</h4>
<a href="./top.jsp">TopPageへ戻る</a>
</body>
</html>