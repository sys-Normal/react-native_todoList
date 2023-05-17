import React, {
  Component,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import Heading from './src/Heading';
import Input from './src/Input';
import TodoList from './src/TodoList';
import Button from './src/Button';
import TabBar from './src/TabBar';

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

const darkmode_black = "#121212";
const lightmode_white = "#f5f5f5";
let todoIndex = 0;

class App extends Component{

  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    }
    this.submitTodo = this.submitTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.setType = this.setType.bind(this);
  }

  inputChange(inputValue) {
    console.log(`input value: ${inputValue}`);
    this.setState({inputValue});
  }

  submitTodo() {
    if(this.state.inputValue.match(/^\s*$/)) {
      return;
    }

    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    }
    todoIndex++;
    const todos = [...this.state.todos, todo];

    this.setState({ todos, inputValue: "" }, () => {
      console.log(`state: ${this.state}`)
    })
  }
  deleteTodo (todoIndex){
    let { todos } = this.state;
    todos = todos.filter((todo) => {
      todo.todoIndex !== todoIndex
    })
    this.setState({todos});
  }
  toggleComplete (todoIndex){
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if(todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({todos});
  }
  setType (type) {
    this.setState({type})
  }

  render() {

    const { inputValue, todos, type } = this.state;

    return(
      <View style={styles.AppContainer}>
        <StatusBar
          backgroundColor={darkmode_black}
          // hidden
        />
        <ScrollView
          style={styles.AppContent}
          keyboardShouldPersistTaps="always"
        >
          <Heading />
          <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)}/>
          <TodoList
            type={type}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
          />
          <Button submitTodo={this.submitTodo}/>
        </ScrollView>
        <TabBar
          type={type}
          setType={this.setType}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: lightmode_white,
  },
  AppContent: {
    flex: 1,
    paddingTop: 50,
  }
});

export default App;
