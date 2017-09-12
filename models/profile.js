module.exports = function(sequelize, DataTypes) {
//With define, the first argument is going to represent a column in the db table
		return sequelize.define('profile', {
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING, /* by time, reps, weight, ... */
			age: DataTypes.INTEGER,
			weight: DataTypes.INTEGER,
			height: DataTypes.INTEGER,
		},{
	});
};