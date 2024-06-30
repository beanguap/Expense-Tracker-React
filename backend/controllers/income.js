const incomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
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
        
        res.status(201).json({ message: 'Income added successfully', income });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }

};

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await incomeSchema.find();
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    incomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) => {
            res.status(500).json({message: 'Server Error'})
        })
}
