import React, { useState, useRef, useCallback } from 'react';
import { uniqueId } from 'lodash';
import { Form } from '@unform/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faTimes,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/Form/Input';

import {
  Body,
  Wrapper,
  Head,
  Question,
  Option,
  Checked,
  Remove,
  Actions,
  ButtonSpinImport,
  WrapperAddOption,
  CreateNewOption,
} from './styles';

function Home() {
  const formRef = useRef(null);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleAddOption() {
    if (options.length <= 4) {
      setOptions(prevState => [
        ...prevState,
        {
          // id: portID,
          value: '',
        },
      ]);
    }
  }

  const handleSubmit = useCallback((data) => {
    setLoading(true);
    console.log(data);
    setLoading(false);
  }, []);

  const handleRemovePort = useCallback(() => {}, []);

  const AddOption = () => (
    <WrapperAddOption onClick={handleAddOption}>
      <Checked>
        <FontAwesomeIcon icon={faCircle} />
      </Checked>
      <CreateNewOption>Add Option</CreateNewOption>
    </WrapperAddOption>
  );

  return (
    <Form
      initialData={{ question, options }}
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Body>
        <Wrapper>
          <Head>
            <Question id={uniqueId()} name="question" placeholder="Question" />
          </Head>

          {options &&
            options.map((option, index) => {
              return (
                <Option key={uniqueId()}>
                  <Checked>
                    <FontAwesomeIcon icon={faCircle} />
                  </Checked>

                  <Input
                    id={option.id}
                    placeholder="Option"
                    name={`options[${index}].value`}
                  />
                  <Remove
                    type="button"
                    onClick={() => handleRemovePort(option)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </Remove>
                </Option>
              );
            })}
          {options.length <= 4 && <AddOption />}
        </Wrapper>
      </Body>
      <Actions>
        <ButtonSpinImport type="submit">
          {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Save Quiz'}
        </ButtonSpinImport>
      </Actions>
    </Form>
  );
}

export default Home;
