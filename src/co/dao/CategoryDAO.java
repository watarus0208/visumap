package co.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import co.bean.CategoryBean;
import co.bean.CityBean;
import co.bean.PrefectureBean;
import co.bean.StatDataBean;
import co.bean.TaxBean;

public class CategoryDAO {
	private Connection con;

	public CategoryDAO() throws DAOException {
		getConnection();
	}

	// カテゴリの一覧を返す関数
	public List<CategoryBean> findCategory() throws DAOException {
		if (con == null)
			getConnection();
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			// カテゴリ情報の取得
			String sql = "select * from category";
			st = con.prepareStatement(sql);
			rs = st.executeQuery();

			List<CategoryBean> list = new ArrayList<>();
			while (rs.next()) {
				int id = rs.getInt("id");
				String name = rs.getString("name");
				String code = rs.getString("code");
				CategoryBean bean = new CategoryBean(id, name, code);
				list.add(bean);
			}

			return list;
		} catch (Exception e) {
			e.printStackTrace();
			throw new DAOException("データの取得に失敗しました。");
		} finally {
			try {
				if (rs != null) {
					rs.close();
					rs = null;
				}
				if (st != null) {
					st.close();
					st = null;
				}
				close();

			} catch (Exception e) {
				e.printStackTrace();
				throw new DAOException("接続の開放に失敗しました。");
			}
		}
	}

	// カテゴリの一覧を返す関数
	public CategoryBean findCategory(int category_id) throws DAOException {
		if (con == null)
			getConnection();
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			// カテゴリ情報の取得
			String sql = "select * from category where id = ?";
			st = con.prepareStatement(sql);
			st.setInt(1, category_id);
			rs = st.executeQuery();

			CategoryBean bean = new CategoryBean();
			if (rs.next()) {
				int id = rs.getInt("id");
				String name = rs.getString("name");
				String code = rs.getString("code");
				bean = new CategoryBean(id, name, code);
			}

			return bean;
		} catch (Exception e) {
			e.printStackTrace();
			throw new DAOException("データの取得に失敗しました。");
		} finally {
			try {
				if (rs != null) {
					rs.close();
					rs = null;
				}
				if (st != null) {
					st.close();
					st = null;
				}
				close();

			} catch (Exception e) {
				e.printStackTrace();
				throw new DAOException("接続の開放に失敗しました。");
			}
		}
	}

	// 都道府県の一覧を返す関数
	public List<PrefectureBean> findPrefecture() throws DAOException {
		if (con == null) {
			getConnection();
		}
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			// カテゴリ情報の取得
			String sql = "select * from prefecture";
			st = con.prepareStatement(sql);
			rs = st.executeQuery();

			List<PrefectureBean> list = new ArrayList<>();
			while (rs.next()) {
				String id = rs.getString("id");
				String name = rs.getString("name");
				PrefectureBean bean = new PrefectureBean(id, name);
				list.add(bean);
			}

			return list;
		} catch (Exception e) {
			e.printStackTrace();
			throw new DAOException("データの取得に失敗しました。");
		} finally {
			try {
				if (rs != null) {
					rs.close();
					rs = null;
				}
				if (st != null) {
					st.close();
					st = null;
				}
				close();

			} catch (Exception e) {
				e.printStackTrace();
				throw new DAOException("接続の開放に失敗しました。");
			}
		}
	}

	// 都道府県IDから都道府県の情報を返す関数
	public PrefectureBean findPrefecture(String prefecture_id) throws DAOException {
		if (con == null) {
			getConnection();
		}
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			// カテゴリ情報の取得
			String sql = "select * from prefecture where id=?";
			st = con.prepareStatement(sql);
			st.setString(1, prefecture_id);
			rs = st.executeQuery();

			PrefectureBean bean = new PrefectureBean();
			if (rs.next()) {
				String id = rs.getString("id");
				String name = rs.getString("name");
				bean = new PrefectureBean(id, name);
			}

			return bean;
		} catch (Exception e) {
			e.printStackTrace();
			throw new DAOException("データの取得に失敗しました。");
		} finally {
			try {
				if (rs != null) {
					rs.close();
					rs = null;
				}
				if (st != null) {
					st.close();
					st = null;
				}
				close();

			} catch (Exception e) {
				e.printStackTrace();
				throw new DAOException("接続の開放に失敗しました。");
			}
		}
	}

	// 都道府県IDから含まれる市町村の情報を返す関数
	public List<CityBean> findCity(String prefecture_id) throws DAOException {
		if (con == null) {
			getConnection();
		}
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			// カテゴリ情報の取得
			String sql = "select * from city where left(id,2)=?";
			st = con.prepareStatement(sql);
			st.setString(1, prefecture_id);
			rs = st.executeQuery();

			List<CityBean> list = new ArrayList<>();
			while (rs.next()) {
				String id = rs.getString("id");
				String name = rs.getString("name");
				double latitude = rs.getDouble("latitude");
				double longitude = rs.getDouble("longitude");
				CityBean bean = new CityBean(id, name, latitude, longitude);
				list.add(bean);
			}

			return list;
		} catch (Exception e) {
			e.printStackTrace();
			throw new DAOException("データの取得に失敗しました。");
		} finally {
			try {
				if (rs != null) {
					rs.close();
					rs = null;
				}
				if (st != null) {
					st.close();
					st = null;
				}
				close();

			} catch (Exception e) {
				e.printStackTrace();
				throw new DAOException("接続の開放に失敗しました。");
			}
		}
	}

	// カテゴリーID及び都道府県IDからMap表示に必要な情報を返す関数
	public StatDataBean findData(int category_id, String prefecture_id) throws DAOException {
		if (con == null) {
			getConnection();
		}
		PreparedStatement st = null;
		ResultSet rs = null;
		try {
			// taxテーブルのcodeを取得
			String sql = "select code from category where id=?";
			st = con.prepareStatement(sql);
			st.setInt(1, category_id);
			rs = st.executeQuery();

			String code;
			if (rs.next()) {
				code = rs.getString("code");
			} else {
				throw new DAOException("カテゴリが有りません。カテゴリの取得に失敗しました。");
			}
			rs.close();
			st.close();

			// 都道府県の座標を取得
			sql = "select latitude,longitude from prefecture where id=?";
			st = con.prepareStatement(sql);
			st.setString(1, prefecture_id);
			rs = st.executeQuery();

			double latitude;
			double longitude;
			if (rs.next()) {
				latitude = rs.getDouble("latitude");
				longitude = rs.getDouble("longitude");
			} else {
				throw new DAOException("カテゴリが有りません。カテゴリの取得に失敗しました。");
			}
			rs.close();
			st.close();

			// 選択された税情報の取得
			// APIの仕様により350件を上限として距離の近い順に取得
			sql = "select t.no, t.year, c.id, t." + code + ","
					+ "pow(c.latitude-(select latitude from prefecture where id='" + prefecture_id + "'),2.0)"
					+ "+pow(c.longitude-(select longitude from prefecture where id='" + prefecture_id
					+ "'),2.0) as distance " + "from tax t join city c on t.id=c.id order by distance limit 350";
			st = con.prepareStatement(sql);
			rs = st.executeQuery();

			List<TaxBean> list = new ArrayList<>();
			while (rs.next()) {
				int no = rs.getInt("no");
				int year = rs.getInt("year");
				String id = rs.getString("id");
				int tax = rs.getInt(code);
				TaxBean bean = new TaxBean(no, year, id, tax);
				list.add(bean);
			}

			// 表示データと座標を格納
			StatDataBean statData = new StatDataBean(list, latitude, longitude);
			// 色彩情報格納
			statData.setColorCode();

			return statData;

		} catch (Exception e) {
			e.printStackTrace();
			throw new DAOException("データの取得に失敗しました。");
		} finally {
			try {
				if (rs != null) {
					rs.close();
					rs = null;
				}

				if (st != null) {
					st.close();
					st = null;
				}
				close();

			} catch (Exception e) {
				e.printStackTrace();
				throw new DAOException("接続の開放に失敗しました。");
			}
		}
	}

	private void getConnection() throws DAOException {
		try {
			/*
			Class.forName("org.postgresql.Driver");
			String url = "jdbc:postgresql:mydata";
			String user = "myuser";
			String pass = "myuser";
			*/
			String dbUrl = System.getenv("JDBC_DATABASE_URL");
			con = DriverManager.getConnection(dbUrl);
		} catch (Exception e) {
			throw new DAOException("SQLの接続にエラーが生じました。");
		}
	}

	private void close() throws SQLException {
		if (con != null) {
			con.close();
			con = null;
		}
	}
}
