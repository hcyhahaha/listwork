-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.1.73-community - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.5.0.5220
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 taobao 的数据库结构
CREATE DATABASE IF NOT EXISTS `taobao` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `taobao`;

-- 导出  表 taobao.listwork 结构
CREATE TABLE IF NOT EXISTS `listwork` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(500) DEFAULT NULL,
  `time` varchar(500) DEFAULT NULL,
  `isFinish` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='清单列表';

-- 正在导出表  taobao.listwork 的数据：~10 rows (大约)
/*!40000 ALTER TABLE `listwork` DISABLE KEYS */;
REPLACE INTO `listwork` (`id`, `text`, `time`, `isFinish`) VALUES
	(1, '吃午饭', '2020/10/27 上午10:01:49', 0),
	(2, '睡觉', '2020/10/27 上午12:51:46', 0),
	(3, '去教学楼', '2020/10/27 上午10:05:22', 1),
	(5, '吃早饭', '2020/10/26 下午10:42:17', 1),
	(7, '吃葡萄', '2020/10/26 下午10:53:41', 0),
	(12, '打疫苗', '2020/10/26 下午11:03:01', 0),
	(13, '吃鱼', '2020/10/26 下午11:09:57', 0),
	(14, '跑步', '2020/10/26 下午11:11:13', 1),
	(20, '去上课，去教学楼，写作业', '2020/10/27 上午10:44:34', 1),
	(21, '去上课，再交作业，再吃饭，再看电视', '2020/10/27 上午11:48:39', 0);
/*!40000 ALTER TABLE `listwork` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
