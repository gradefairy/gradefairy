import React from "react";
import {StyleSheet, Text, View} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import NavigationHeader from "../components/NavigationHeader";

export default class SettingAppVersionScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={GlobalStyles.container}>
        <NavigationHeader
          title={"앱 버전 정보"}
          navigation={this.props.navigation} />
        {/* 여기서부터 앱 버전 정보 레이아웃 */}
        <Text style={styles.title}>버전 1.0.0</Text>
        <Text style={styles.contents}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum.
 Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium doloremque eopsloi laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunot explicabo. Nemo ernim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
, sedopk quia consequuntur magni dolores eos qui rationesopl voluptatem sequi nesciunt. Neque porro quisquameo est, qui dolorem ipsum quia dolor sit amet, eopsmiep consectetur, adipisci velit,
 seisud quia non numquam
 eius modi tempora incidunt ut labore et dolore wopeir magnam aliquam quaerat voluptatem eoplmuriquisqu
        </Text>
        {/* 여기까지 앱 버전 정보 레이아웃 */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    paddingVertical: 10
  },
  contents: {
    fontSize: 13
  }
});
