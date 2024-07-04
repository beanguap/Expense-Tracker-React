import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'

const Expenses = () => {
  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
      </InnerLayout>
    </ExpensesStyled>
  )
}

const ExpensesStyled = styled.div`
  /* Add your styles here */
`

export default Expenses