import * as yup from 'yup'
import Text from "./Text";
import { View, Pressable, Alert, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: theme.colors.backgroundSecondry,
  },
  button: {
    backgroundColor: theme.colors.emphasisPrimary,
    padding: 17,
    margin: 10,
    marginStart: 10,
    marginEnd: 10,
    borderRadius: theme.roundness,
  },
});


const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
})


const SignIn = () => {
  const onSubmit = values => {
    const username = String(values.username)
    const password = String(values.password)

    console.log('username', username)
    console.log('password', password);
    Alert.alert(`Username ${username} password ${password}`);

  }



  return <View>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  </View>



}

export default SignIn


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        placeholderTextColor={theme.colors.textSecondary}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={theme.colors.textSecondary}
      />
      <View style={styles.button}>
        <Pressable onPress={onSubmit}>
          <Text color={theme.colors.textWhite} style={{ textAlign: 'center' }}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  )


} 