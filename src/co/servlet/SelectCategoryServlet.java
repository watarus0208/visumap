package co.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.bean.CategoryBean;
import co.bean.PrefectureBean;
import co.bean.StatDataBean;
import co.dao.CategoryDAO;
import co.dao.DAOException;

@WebServlet("/SelectCategoryServlet")
public class SelectCategoryServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		try {
			// パラメータの解析
			String action = request.getParameter("action");

			// top.jspよりaction=topが選択された時
			if (action == null || action.length() == 0 || action.equals("top")) {
				gotoPage(request, response, "/top.jsp");

				// top.jspよりaction=listが選択された時
			} else if (action.equals("list")) {
				int category_id = Integer.parseInt(request.getParameter("category_id"));
				String prefecture_id = request.getParameter("prefecture_id");

				if (category_id == 0 || prefecture_id == null || prefecture_id.length() == 0) {
					request.setAttribute("message", "カテゴリと都道府県両方を選択してください。");
					gotoPage(request, response, "/errInternal.jsp");

				} else {
					CategoryDAO dao = new CategoryDAO();
					StatDataBean statData = dao.findData(category_id, prefecture_id);
					CategoryBean category = dao.findCategory(category_id);
					PrefectureBean prefecture = dao.findPrefecture(prefecture_id);

					// show.jspのメニュー部へ表示
					HttpSession session = request.getSession(true);
					session.setAttribute("category", category);
					session.setAttribute("prefecture", prefecture);

					request.setAttribute("statData", statData);

					gotoPage(request, response, "/show.jsp");
				}
			}
		} catch (DAOException e) {
			e.printStackTrace();
			request.setAttribute("message", "内部エラーが発生しました。");
			gotoPage(request, response, "/errInternal.jsp");
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

	public void init() throws ServletException {
		try {
			CategoryDAO dao = new CategoryDAO();

			// 初期設定としてカテゴリ情報を取得
			List<CategoryBean> categories = dao.findCategory();
			getServletContext().setAttribute("categories", categories);

			// 初期設定として都道府県情報を取得
			List<PrefectureBean> prefectures = dao.findPrefecture();
			getServletContext().setAttribute("prefectures", prefectures);

		} catch (DAOException e) {
			e.printStackTrace();
		}
	}

	void gotoPage(HttpServletRequest request, HttpServletResponse response, String page)
			throws ServletException, IOException {
		RequestDispatcher rd = request.getRequestDispatcher(page);
		rd.forward(request, response);
	}
}
