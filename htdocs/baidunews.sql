-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 27, 2017 at 02:15 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newimg` varchar(200) NOT NULL,
  `newstime` date NOT NULL,
  `newssrc` char(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newimg`, `newstime`, `newssrc`) VALUES
(1, '精选', '测试数据库中第一条数据', 'img/1.jpg\r\n', '2017-06-24', '极客学院测试数据\r\n'),
(3, '百家', '2017高考成绩放榜啦', 'img/1.jpg', '2017-06-17', '额威风威风威风分为氛围分为氛围分为氛围'),
(4, '精选', '123', 'img/2.png', '2017-06-27', '2324'),
(8, '精选', '123', 'img/1.jpg', '2017-06-27', '321'),
(9, '精选', '123', 'img/2.png', '2017-06-27', '321'),
(12, '精选', '123', 'img/1.jpg', '2017-06-27', '321'),
(14, '百家', '百家', 'img/1.jpg', '2017-06-27', '百家讲坛'),
(16, '百家', '百家', 'img/1.jpg', '2017-06-27', '百家讲坛'),
(17, '本地', '本地', 'img/1.jpg', '2017-06-27', '本地新闻快报'),
(18, '本地', '本地', 'img/1.jpg', '2017-06-27', '本地新闻快报'),
(19, '本地', '本地', 'img/2.png', '2017-06-27', '本地新闻快报'),
(20, '本地', '本地', 'img/2.png', '2017-06-27', '本地新闻快报'),
(21, '本地', '本地', 'img/2.png', '2017-06-27', '本地新闻快报');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
