import {useCallback, useState} from 'react';
import {handleCurrencyChangeText} from '../utils/CurrencyFormatterUtils';
import {FormikProps} from 'formik';
import {TransactionDetail} from '../types/TransactionDetailDataType';

export const useCurrencyFormatter = (
  formik: FormikProps<TransactionDetail>,
  fieldName: string,
) => {
  const [formattedText, setFormattedText] = useState<string>(`${formik.values.amount}`);

  const formatPriceText = useCallback(
    (text: string) => {
      const inputText = handleCurrencyChangeText(text);
      setFormattedText(inputText);
      formik.setFieldValue(fieldName, inputText);
    },
    [formik, fieldName,],
  );

  const inputTextSelection = useCallback(() => {
    return {
      start: formattedText.length,
      end: formattedText.length,
    };
  }, [formattedText]);

  const clearIfZero = useCallback(() => {
    if (formattedText === '0.00') {
      setFormattedText('');
      formik.setFieldValue(fieldName, '');
    }
    formik.setFieldTouched(fieldName, true);
  }, [formattedText, formik, fieldName]);

  return {
    formattedText,
    formatPriceText,
    inputTextSelection,
    clearIfZero,
    setFormattedText,
  };
};
