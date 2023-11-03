import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useFilter } from '../../context/filterContext';

function SplitVariantExample() {
    const {laptopFilter, allFilterProduct, phoneFilter, priceLowtoHigh, priceHightoLow} = useFilter();
  return (
    <>
       <Dropdown as={ButtonGroup}>
      <Button variant="success">filter by sort</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item onClick={priceLowtoHigh}>Price ascending</Dropdown.Item>
        <Dropdown.Item onClick={priceHightoLow}>Price decsending</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       <Dropdown as={ButtonGroup}>
      <Button variant="success">filter by category</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item onClick={allFilterProduct}>All</Dropdown.Item>
        <Dropdown.Item onClick={laptopFilter}>Laptop</Dropdown.Item>
        <Dropdown.Item onClick={phoneFilter}>Mobile</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}

export default SplitVariantExample;