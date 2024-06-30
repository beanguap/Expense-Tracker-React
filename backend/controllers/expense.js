const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;
    
    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        if (amount <= 0 || typeof amount !== 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number' });
        }

        const income = new incomeSchema({
            title,
            amount,
            category,
            description,
            date
        });

        await income.save();
        
        res.status(201).json({ message: 'Expense added successfully', income });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }

};

exports.getExpense = async (req, res) => {
    try {
        const incomes = await ExpenseSchema.find();
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}
