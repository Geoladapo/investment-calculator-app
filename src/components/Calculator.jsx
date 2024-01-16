import Input from './Input';

const Calculator = ({ userInput, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          labelName="initial investment"
          type="number"
          value={userInput.initialInvestment}
          onChange={(e) => onChange('initialInvestment', e.target.value)}
        />
        <Input
          labelName="Annual investment"
          type="number"
          value={userInput.annualInvestment}
          onChange={(e) => onChange('annualInvestment', e.target.value)}
        />
      </div>
      <div className="input-group">
        <Input
          labelName="Expected Returns"
          type="number"
          value={userInput.expectedReturn}
          onChange={(e) => onChange('expectedReturn', e.target.value)}
        />
        <Input
          labelName="Duration"
          type="number"
          value={userInput.duration}
          onChange={(e) => onChange('duration', e.target.value)}
        />
      </div>
    </section>
  );
};

export default Calculator;
