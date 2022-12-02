import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../styles/colors/GlobalColors';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <View style={styles.jolo}>
        <Text style={styles.placeholder}>
          {placeholder}
        </Text>
        <TextInput
          style={[styles.input, isInvalid && styles.inputInvalid]}
          autoCapitalize={false}
          autoCapitalize="none"
          keyboardType={keyboardType}
          secureTextEntry={secure}
          onChangeText={onUpdateValue}
          value={value}
        />
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  placeholder: {
    color: 'black',
    position: 'absolute',
    zIndex: 999,
    marginHorizontal: 6,
  },
  labelInvalid: {
    color: GlobalStyles.colors.error,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: GlobalStyles.colors.inputs,
    borderRadius: 4,
    fontSize: 16,
    paddingLeft: 40
  },
  inputInvalid: {
    backgroundColor: GlobalStyles.colors.error,
  },
  jolo:{
    justifyContent: 'center',
  }
});
