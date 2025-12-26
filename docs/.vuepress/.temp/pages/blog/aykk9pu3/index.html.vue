<template><div><h2 id="一、为什么需要-ref" tabindex="-1"><a class="header-anchor" href="#一、为什么需要-ref"><span>一、为什么需要 ref</span></a></h2>
<p>在 Vue 中，官方一直强调：</p>
<blockquote>
<p><strong>尽量通过数据驱动视图，而不是直接操作 DOM</strong></p>
</blockquote>
<p>也就是说，常规情况下：</p>
<ul>
<li>内容变化 → 使用 <code v-pre>{{ }}</code> 模板语法</li>
<li>属性变化 → 使用 <code v-pre>v-bind</code></li>
<li>事件处理 → 使用 <code v-pre>v-on</code></li>
</ul>
<p>但在某些<strong>特殊场景</strong>下，我们仍然需要<strong>直接访问真实 DOM 元素</strong>，例如：</p>
<ul>
<li>手动获取输入框的值</li>
<li>操作第三方库（ECharts、富文本编辑器等）</li>
<li>获取元素尺寸、焦点、滚动位置</li>
</ul>
<p>这时，就需要用到 <code v-pre>ref</code>。</p>
<hr>
<h2 id="二、ref-的基本用法" tabindex="-1"><a class="header-anchor" href="#二、ref-的基本用法"><span>二、ref 的基本用法</span></a></h2>
<h3 id="_1-模板代码" tabindex="-1"><a class="header-anchor" href="#_1-模板代码"><span>1. 模板代码</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-vue"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">容器</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">input</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">text</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ref</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">username</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">click</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">getElementHandel</span><span style="--shiki-light:#999999;--shiki-dark:#666666">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">获取元素</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h3>
<ul>
<li><code v-pre>ref=&quot;container&quot;</code>：给 div 元素添加一个引用标识</li>
<li><code v-pre>ref=&quot;username&quot;</code>：给 input 元素添加一个引用标识</li>
<li>ref 的值是一个 <strong>字符串 key</strong>，用于在 JS 中访问</li>
</ul>
<hr>
<h2 id="三、通过-this-refs-获取-dom" tabindex="-1"><a class="header-anchor" href="#三、通过-this-refs-获取-dom"><span>三、通过 this.$refs 获取 DOM</span></a></h2>
<h3 id="script-部分" tabindex="-1"><a class="header-anchor" href="#script-部分"><span>Script 部分</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-vue"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(){</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">        return</span><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">            content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">内容</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    },</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    methods</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">        getElementHandel</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(){</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            // 通过 ref 获取 DOM 元素</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">            this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">$refs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">container</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">innerHTML</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">哈哈哈</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">            console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">$refs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">username</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">        }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="四、执行过程解析" tabindex="-1"><a class="header-anchor" href="#四、执行过程解析"><span>四、执行过程解析</span></a></h2>
<ol>
<li>页面渲染完成后</li>
<li>Vue 会把所有带有 <code v-pre>ref</code> 的元素，收集到 <code v-pre>$refs</code> 对象中</li>
<li><code v-pre>$refs</code> 是一个对象，结构类似：</li>
</ol>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-js"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  container</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> HTMLDivElement</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  username</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> HTMLInputElement</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>点击按钮后：
<ul>
<li>通过 <code v-pre>this.$refs.container</code> 直接修改 DOM 内容</li>
<li>通过 <code v-pre>this.$refs.username.value</code> 获取输入框的值</li>
</ul>
</li>
</ol>
<hr>
<h2 id="五、ref-的注意事项-非常重要" tabindex="-1"><a class="header-anchor" href="#五、ref-的注意事项-非常重要"><span>五、ref 的注意事项（非常重要）</span></a></h2>
<h3 id="_1-ref-不是响应式的" tabindex="-1"><a class="header-anchor" href="#_1-ref-不是响应式的"><span>1. ref 不是响应式的</span></a></h3>
<ul>
<li><code v-pre>$refs</code> 中的内容 <strong>不会触发视图更新</strong></li>
<li>仅用于 DOM 或组件实例的临时访问</li>
</ul>
<h3 id="_2-ref-只能在渲染完成后使用" tabindex="-1"><a class="header-anchor" href="#_2-ref-只能在渲染完成后使用"><span>2. ref 只能在渲染完成后使用</span></a></h3>
<ul>
<li>在 <code v-pre>created</code> 钩子中访问不到</li>
<li>通常在 <code v-pre>mounted</code> 或事件回调中使用</li>
</ul>
<h3 id="_3-不要滥用-ref" tabindex="-1"><a class="header-anchor" href="#_3-不要滥用-ref"><span>3. 不要滥用 ref</span></a></h3>
<p>官方建议：</p>
<blockquote>
<p>能用数据驱动解决的问题，不要使用 ref</p>
</blockquote>
<p>ref 更适合：</p>
<ul>
<li><strong>必要时的 DOM 兜底方案</strong></li>
<li>与非 Vue 体系的库交互</li>
</ul>
<hr>
<h2 id="六、ref-与-vue-思想的关系" tabindex="-1"><a class="header-anchor" href="#六、ref-与-vue-思想的关系"><span>六、ref 与 Vue 思想的关系</span></a></h2>
<p>可以这样理解：</p>
<ul>
<li>Vue 的核心思想：<strong>数据驱动视图</strong></li>
<li>ref 的定位：<strong>在必要场景下，安全地“逃逸”出 Vue 的抽象层</strong></li>
</ul>
<p>它不是推荐的常规方案，而是一个<strong>补充工具</strong>。</p>
<hr>
<h2 id="七、小结" tabindex="-1"><a class="header-anchor" href="#七、小结"><span>七、小结</span></a></h2>
<ul>
<li><code v-pre>ref</code> 用于获取 DOM 元素或组件实例</li>
<li>通过 <code v-pre>this.$refs.xxx</code> 访问</li>
<li>只在必要场景下使用</li>
<li>不应取代 Vue 的响应式数据机制</li>
</ul>
<p>这一节内容为后续学习 <strong>生命周期、第三方库集成、组件通信</strong> 提供了基础支持。</p>
</div></template>


