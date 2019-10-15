
--
-- Database: `LoginForm`
--

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `student_phone_number` varchar(10) DEFAULT NULL,
  `student_place`  varchar(255) DEFAULT NULL,
  `student_email` varchar(255) DEFAULT NULL,
  `student_name` varchar(255) DEFAULT NULL,
   `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`student_id`,`student_phone_number`,`student_place`, `student_email`, `student_name`,`username`,`password`) VALUES
(2,'9000000000','HYD', 'mike@gmail.com', 'Mike','admin','password'),
(3,'9000000001','Guntur', 'alexa@gmail.com', 'alexa','superadmin','Password1!');
COMMIT;
