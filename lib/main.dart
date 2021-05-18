import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
    home: Scaffold(
            body: Page()
        )
    );
  }
}

class Page extends StatefulWidget {

  PageState createState() => PageState();

}

class PageState extends State<Page>{
  final controller = PageController(
    initialPage: 0,
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: Text('PageView Widget in Flutter')),
        body: Center(child:
        PageView(
          controller: controller,
          onPageChanged: (page)=>{ print(page.toString()) },
          pageSnapping: true,
          scrollDirection: Axis.vertical,
          children: <Widget>[
            Container(
                color: Colors.pink,
                child: Center(child:
                    // child: Text('This is Widget 1',
                    //   style: TextStyle(fontSize: 25,
                    //       color: Colors.white),))
                  PageView(
                    controller: controller,
                    onPageChanged: (page)=>{ print(page.toString()) },
                    pageSnapping: true,
                    scrollDirection: Axis.horizontal,
                    children: <Widget>[
                      Container(
                          color: Colors.yellow,
                          child: Center(
                              child: Text('This is home Widget 1',
                                  style: TextStyle(fontSize: 25,
                                      color: Colors.white),))
                          ),
                      Container(
                          color: Colors.purple,
                          child: Center(
                              child: Text('This is horizontal Widget - 2',
                                style: TextStyle(fontSize: 25,
                                    color: Colors.white),))
                      ),
                  ]
                )
                )
            ),

            Container(
                color: Colors.green,
                child: Center(
                    child: Text('This is vertical Widget - 2',
                      style: TextStyle(fontSize: 25,
                          color: Colors.white),))
            ),

            Container(
                color: Colors.lightBlue,
                child: Center(
                    child: Text('This is vertical Widget - 3',
                      style: TextStyle(fontSize: 25,
                          color: Colors.white),))
            ),

          ],
        ),

        )
    );
  }
}
