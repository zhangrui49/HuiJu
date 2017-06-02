import React, {Component} from 'react';
import {View, Image, StyleSheet, WebView} from 'react-native';
let url = 'http://news-at.zhihu.com/api/4/news/id'
let html="<div class=\"main-wrap content-wrap\">\n<div class=\"headline\">\n\n<div class=\"img-place-holder\"><\/div>\n\n\n\n<\/div>\n\n<div class=\"content-inner\">\n\n\n\n\n<div class=\"question\">\n<h2 class=\"question-title\"><\/h2>\n\n<div class=\"answer\">\n\n<div class=\"content\">\n<p style=\"text-align: center;\">* * *<\/p>\r\n<p style=\"text-align: center;\">我明明是认真的<\/p>\r\n<p style=\"text-align: center;\">为什么你们都在笑<\/p>\r\n<p style=\"text-align: center;\">* * *<\/p>\n<\/div>\n<\/div>\n\n\n<\/div>\n\n\n\n\n\n<div class=\"question\">\n<h2 class=\"question-title\">医院工作人员现实工作中，会遇到保大保小的问题吗?<\/h2>\n\n<div class=\"answer\">\n\n<div class=\"meta\">\n<img class=\"avatar\" src=\"http:\/\/pic3.zhimg.com\/v2-ddd5ed406ee9644f6e55ebec151fefc2_is.jpg\">\n<span class=\"author\">皮卡了个秋<\/span>\n<\/div>\n\n<div class=\"content\">\n<p>我信了！我特么信了啊！<\/p>\r\n<p>我躺在待产床一边忍宫缩痛，一边忐忑地问旁边给我检查的护士：<\/p>\r\n<p>&ldquo;请问下，你们这哪里可以签遗体捐赠协议？&rdquo;<\/p>\r\n<p>小护士没明白的样子：&ldquo;什么？你要干什么？&rdquo;<\/p>\r\n<p>我：&ldquo;那个，遗体捐赠。呃，是这么回事。有个万一的话，我想捐出去，烧了也是烧了，家人看了还难受。医学生总是需要实际操作的对吧，总得有练习的啊，反正死了啥也不知道&hellip;&hellip;&rdquo;<\/p>\r\n<p>护士大惊失色：&ldquo;什么？你就生个孩子啊！怎么会死？&rdquo;<\/p>\r\n<p>一屋子的护士啊！拖机器的，打电脑记录的，给别的产妇忙碌的顿时惊得停下来，甚至一直在呻吟喊痛地产妇都转头看我。<\/p>\r\n<p>我我我，我有点尴尬也有点不明所以，（这跟我想象的不一样啊。怎么，你们不缺尸体怎么滴？知乎上不是说医学生上课要尸体么。平时还缝缝柚子练习什么的&hellip;&hellip;）<\/p>\r\n<p>我：&ldquo;啊？比如产后大出血什么的。反正也是死了，做点贡献呗&hellip;&hellip;&rdquo;<\/p>\r\n<p>护士：&ldquo;你，你，你，你是不是网上瞎看东西啊！你就生个孩子啊，怎么会死？我们医院还没听说过这样的事。普通生个孩子就会死，那人不早灭绝啦。&rdquo;<\/p>\r\n<p>我意识到不对，但还不死心，做个大体老师（没错，这个锅是知乎的）也算这辈子做点贡献了，还自觉挺有荣誉感呢。<\/p>\r\n<p>&ldquo;啊？真的没有么？万一呢，要不，还是签了吧，我还没做过手术呢&hellip;&hellip;&rdquo;<\/p>\r\n<p>但护士们已经不行了，纷纷哈哈哈：<\/p>\r\n<p>&ldquo;不行了，我要发个朋友圈！哎哎哎，那个谁（刚进来的护士），我跟你讲，这个产妇问有没有遗体捐赠。哈哈哈。&rdquo;<\/p>\r\n<p>然后刚才进来的一愣，也加入了&ldquo;哈哈哈&rdquo;的行列。<\/p>\r\n<p>大家纷纷对我：<\/p>\r\n<p>&ldquo;哈哈哈，你不是顺产么，压根不上手术台的。&rdquo;<\/p>\r\n<p>&ldquo;别怕别怕，你是不是怕疼？哈哈哈。&rdquo;<\/p>\r\n<p>&ldquo;小姑娘，你听谁说的。我这都二胎了&hellip;&rdquo;<\/p>\r\n<p>&ldquo;真没事，放轻松，听医生的。哈哈哈&rdquo;<\/p>\r\n<p>&ldquo;你别瞎用力就行，哈哈哈&rdquo;<\/p>\r\n<p>&ldquo;哈哈哈&rdquo;<\/p>\r\n<p>&hellip;&hellip;<\/p>\r\n<p>顿时整个产房里洋溢着十！分！欢！乐！的！气！氛！<\/p>\r\n<p>我的感觉真是<\/p>\r\n<p>一！言！难！尽！<\/p>\r\n<p>而且，护士真的掏手机发朋友圈了啊！<\/p>\r\n<p>你们不是在上班么，这是产科啊，你们不是吐槽夜间最紧张最忙乱么。<\/p>\r\n<p>这样真的好么？么？么？<\/p>\r\n<p>还有你们，你们不是在阵痛么，刚刚不是在呻吟么，不是还挂着催产素么，不是说疼起来的人很烦躁什么都不想听么<\/p>\r\n<p>那个又疼又想笑的表情是怎么回事，你们还生不生孩子了！生不生了！了！<\/p>\r\n<p>怒摔哦！<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>你问后来？<\/p>\r\n<p>阵痛宫缩没出声，指检我忍不住啊了一声。<\/p>\r\n<p>护士：&ldquo;喊什么喊，留着点力气！&rdquo;<\/p>\r\n<p>我：&ldquo;我怕疼啊。&rdquo;<\/p>\r\n<p>护士：&ldquo;怕什么怕，你死都不怕的人。&rdquo;<\/p>\r\n<p>我&hellip;&hellip;&hellip;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>后来，<\/p>\r\n<p>实在痛到不行，拉玛泽呼吸法也不起作用了。我怂了。<\/p>\r\n<p>我：&ldquo;护士，我要镇痛棒。&rdquo;<\/p>\r\n<p>护士：&ldquo;没有！&rdquo;<\/p>\r\n<p>我：&ldquo;什么，怎么会没有！&rdquo;<\/p>\r\n<p>护士：&ldquo;六院就是没有。深呼吸，加油，自己生。&rdquo;<\/p>\r\n<p>我：&ldquo;很疼啊，怎么可能没有，那手术的怎么办？&rdquo;<\/p>\r\n<p>护士：&ldquo;剖腹产有，你要剖？&rdquo;<\/p>\r\n<p>我：&ldquo;不，我要顺。&rdquo;<\/p>\r\n<p>护士：&ldquo;这就对了，生孩子哪有不疼的。怕什么，你死都不怕的人！&rdquo;<\/p>\r\n<p>我&hellip;&hellip;<\/p>\r\n<p>好，好，好，我不说话了还不行么？<\/p>\r\n<p>丢不起那个人。<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>最后，我刚生完，还趟在产床上。<\/p>\r\n<p>另个护士：&ldquo;看！什么事都没有吧，顺顺利利！&rdquo;<\/p>\r\n<p>还有完没完了啊，摔。<\/p>\r\n<p>还有，你刚才根本就不在吧，为什么也来调侃我？<\/p>\r\n<p>心塞。<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>你们以为这就结束了？<\/p>\r\n<p>我回病房后跟先生诉苦加撒娇说，好疼好疼啊。<\/p>\r\n<p>先生说，<\/p>\r\n<p>&ldquo;护士说你对疼痛的忍耐程度比较低。&rdquo;<\/p>\r\n<p>&ldquo;啥！我这还叫低？你是不知道有多疼啊&hellip;&rdquo;<\/p>\r\n<p>&ldquo;嗯，她说你死都不怕，怕疼！&rdquo;<\/p>\r\n<p>我&hellip;&hellip;<\/p>\r\n<p>&nbsp;<\/p>\r\n<p>产房和病房的护士根本不是一波人吧，<\/p>\r\n<p>还能不能好好上班了你们！<\/p>\n<\/div>\n<\/div>\n\n\n<div class=\"view-more\"><a href=\"http:\/\/www.zhihu.com\/question\/37365382\">查看知乎讨论<span class=\"js-question-holder\"><\/span><\/a><\/div>\n\n<\/div>\n\n\n<\/div>\n<\/div>";
class ZhihuDetail extends Component {
    static navigationOptions = {
        title: '知乎日报'
    }
    constructor(props) {
        super(props);
        this.state = {
            body:""
        }
    }

    componentDidMount() {
        this.getStory();
    }

    getStory() {
        let tempUrl = url.replace('id', this.props.navigation.state.params.id);
        console.log(tempUrl);
        fetch(tempUrl).then((response) => response.json()).then((responseData) => {
            this.setState((state) => ({
                body:responseData.body
            }));
        }).catch((error) => {
            console.log(error);
        }).done();
    }

    render() {
        return (
            <View style={ {flex:1}}>
            <WebView
                automaticallyAdjustContentInsets={false}
                source={{
                    html: this.state.body,
                    baseUrl: 'http://daily.zhihu.com/'
                }}
                javaScriptEnabled={true}
                decelerationRate="normal"
                onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
                renderError={this.renderError}
            />
            </View>
        );
    }

    renderError() {
        return <Image source={require('../../image/error.png')}/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
});


export default ZhihuDetail;
