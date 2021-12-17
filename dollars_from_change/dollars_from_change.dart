import 'package:flutter/material.dart';

import 'package:wyrth_v2/common/common.dart';
import 'package:wyrth_v2/app_router/app_router.dart';
import 'package:wyrth_v2/create_account/create_account_1.dart';

import 'package:wyrth_v2/what_is_wyrth/what_is_wyrth_rootController.dart';



class DollarsFromChange extends StatelessWidget {
  static const double TOP_HEIGHT = 0.4; // controls height of top banner..

  @override
  Widget build(BuildContext context) {
    final double height = repairWeb(MediaQuery.of(context).size.height);
    final double width = MediaQuery.of(context).size.width;

    final _bottomContent = Container(
      width: MediaQuery.of(context).size.width,
      padding: EdgeInsets.all(40.0),
      child: Center(
        child: Column(
          children: <Widget>[
            Text(
              "[10-15 words, summarising top-level message/value proposition]",
              style: TextStyle(fontSize: 18.0),
            ),
            SizedBox(height: 50),
            Text(
              "[More marketing content]",
              style: TextStyle(fontSize: 18.0),
            ),
            SizedBox(height: 50),
            wyrthTextButton(context, "Learn More", push_to_WhatIsWyrthRoot, WHAT_IS_WYRTH_ROOT),
            SizedBox(height: 30),
            wyrthTextButton(context, "I'll just figure it out..", push_to_CreateAccount1, CREATE_ACCOUNT_1)
          ], //, readButton],
        ),
      ),
    );

    return Scaffold(
      body: Column(
        children: <Widget>[
          wyrthTop(context, "Dollars From Change", NO_ROUTE, TOP_HEIGHT * height, width),
          _bottomContent],
      ),
        bottomNavigationBar: wyrthBottomAppBar(context)
    );
  }
}
