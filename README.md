# theme-cais

某个[issue](https://github.com/ZEROKISEKI/hexo-theme-cube/issues/5)上让我做的一个主题的hexo版本,原主题在[这里](https://github.com/hi-caicai/farbox-theme-cais)

目前基本完成, 还有部分没有优化:

- 移动端自适应(原主题没有做的)
- 图片使用lightGallery(原主题没有做的)

### 使用

在你的hexo站点目录下clone:

    git clone https://github.com/ZEROKISEKI/theme-cais.git themes/cais
    
**注意!!!**, 使用前应该在你的hexo站点目录安装`hexo-renderer-scss`:

    npm install hexo-renderer-scss -save(国内可能有点问题)
    
    or 
    
    cnpm install hexo-renderer-scss -save    

### 修改代码高亮样式

目前已经设置的代码样式
 - vs2015
 - xcode
 - vs
 - github
 - darcula
 - androidstudio
 
修改代码样式, 需要在**themes/cais/source/css/_common.scss**做下面的修改(比如使用github):

    @import "../../libs/highlight/github";

然后在**themes/cais/source/css/_markdown.scss**中的highlight样式做`background`的修改:

    .highlight {
        overflow: auto;
        margin: 20px 0;
        padding: 0;
        font-size: 13px;
        // 修改背景颜色
        background: #f8f8f8;(在themes/cais/libs/highlight/github.scss的.hljs中)
        line-height: 1.6;
    }
    
事实上关于highlight.js有很多代码样式,可以参照上面几个修改过了的代码的.scss文件对其他文件修改,比如,你可以参考**themes/cais/libs/highlight/github.scss**的代码样式对同目录下的**xt256.scss**进行修改。    

### 使用了google的webFont

如果太慢的话就将**主题下**的`_config.yml`关闭:

    open_webFont: false
    
### 个人链接

- 如果不采用url链接的话，可以上**font-awesome**官网招对应的icon,比如微博对应的icon为`fa fa-weibo`,那么在`_config.yml`的link对应的icon填`weibo`即可

### 其他

如果有什么问题就提issue(匿