<template><div><h1 id="vue-学习笔记-二-事件处理-v-on" tabindex="-1"><a class="header-anchor" href="#vue-学习笔记-二-事件处理-v-on"><span>Vue 学习笔记（二）：事件处理（v-on）</span></a></h1>
<p><strong>日期：2025.12.18</strong>
今天学习了 Vue 中的事件处理机制，核心指令为 <strong><code v-pre>v-on</code></strong>。事件处理主要分为两种形式：<strong>内联事件处理器</strong> 和 <strong>方法事件处理器</strong>，两者在使用场景和代码组织方式上各有侧重。</p>
<hr>
<h2 id="一、v-on-指令基础" tabindex="-1"><a class="header-anchor" href="#一、v-on-指令基础"><span>一、v-on 指令基础</span></a></h2>
<p><code v-pre>v-on</code> 用于<strong>监听 DOM 事件</strong>，并在事件触发时执行相应的 JavaScript 表达式或方法。</p>
<h3 id="_1-基本写法与简写形式" tabindex="-1"><a class="header-anchor" href="#_1-基本写法与简写形式"><span>1. 基本写法与简写形式</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">v-on:click="count++"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>可以简写为：</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@click="count++"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-事件类型" tabindex="-1"><a class="header-anchor" href="#_2-事件类型"><span>2. 事件类型</span></a></h3>
<ul>
<li><code v-pre>click</code>：单击事件</li>
<li><code v-pre>dblclick</code>：双击事件</li>
<li>其他如 <code v-pre>mouseenter</code>、<code v-pre>keyup</code> 等</li>
</ul>
<p>示例：</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-html"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">@dblclick="doSomething"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h2 id="二、内联事件处理器" tabindex="-1"><a class="header-anchor" href="#二、内联事件处理器"><span>二、内联事件处理器</span></a></h2>
<p>内联事件处理器是指<strong>直接在模板中编写简单的表达式</strong>，适合逻辑非常简单的场景。</p>
<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-vue"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">内联事件处理器</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">click</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">count</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Add</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{{ count }}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">                 // v-on: 可以简写为 @</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      count</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="效果说明" tabindex="-1"><a class="header-anchor" href="#效果说明"><span>效果说明</span></a></h3>
<ul>
<li>点击按钮后，<code v-pre>count</code> 的值会自增 1</li>
<li>页面会自动更新显示最新的 <code v-pre>count</code> 值</li>
</ul>
<p>这种写法<strong>直观、简洁</strong>，但当逻辑变复杂时，不利于维护。</p>
<hr>
<h2 id="三、方法事件处理器" tabindex="-1"><a class="header-anchor" href="#三、方法事件处理器"><span>三、方法事件处理器</span></a></h2>
<p>方法事件处理器是指<strong>将事件触发后的逻辑写在 <code v-pre>methods</code> 中</strong>，再通过 <code v-pre>v-on</code> 调用该方法。这是更推荐、也更常用的写法。</p>
<h3 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1"><span>示例代码</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-vue"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">方法事件处理器</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">h3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">click</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">addCount</span><span style="--shiki-light:#999999;--shiki-dark:#666666">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">add</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">button</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">{{ count }}</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> default</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">      count</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  },</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  methods</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    addCount</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      // 读取 data 中的数据需要使用 this</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">      this</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">count</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="核心要点" tabindex="-1"><a class="header-anchor" href="#核心要点"><span>核心要点</span></a></h3>
<ul>
<li>事件逻辑集中在 <code v-pre>methods</code> 中，结构更清晰</li>
<li>在方法中访问 <code v-pre>data</code> 内的数据，必须通过 <code v-pre>this.xxx</code></li>
<li>适合逻辑较多、需要复用或后期维护的场景</li>
</ul>
<hr>
<h2 id="四、两种事件处理方式的对比" tabindex="-1"><a class="header-anchor" href="#四、两种事件处理方式的对比"><span>四、两种事件处理方式的对比</span></a></h2>
<table>
<thead>
<tr>
<th>方式</th>
<th>特点</th>
<th>适用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>内联事件处理器</td>
<td>写法简单、直观</td>
<td>简单操作，如自增、自减</td>
</tr>
<tr>
<td>方法事件处理器</td>
<td>结构清晰、可维护性高</td>
<td>逻辑复杂、可复用操作</td>
</tr>
</tbody>
</table>
<p>在实际项目中，<strong>方法事件处理器更常见，也更推荐使用</strong>。</p>
<hr>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2>
<p>本次学习的重点包括：</p>
<ul>
<li><code v-pre>v-on</code> 指令的基本使用与简写形式 <code v-pre>@</code></li>
<li>内联事件处理器的写法与适用场景</li>
<li>方法事件处理器的写法以及 <code v-pre>this</code> 的使用方式</li>
</ul>
<p>事件处理是 Vue 交互逻辑的基础，为后续学习表单处理、组件通信和业务逻辑打下了重要基础。</p>
</div></template>


