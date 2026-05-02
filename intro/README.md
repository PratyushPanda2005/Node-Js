<h1>🚀 Runtime Environment & JavaScript Engine</h1>

<h2>🧠 What is a Runtime Environment?</h2>
<p>
A <b>runtime environment</b> is the infrastructure that allows a program to execute.
It provides everything your code needs to actually run on a machine.
</p>

<p>
Computers don’t understand JavaScript — they only understand <b>machine code</b>.
So, something needs to translate JavaScript into machine code.
</p>

<hr>

<h2>⚙️ What is a JavaScript Engine?</h2>
<p>
A <b>JavaScript Engine</b> is the translator that converts JavaScript into machine code.
</p>

<ul>
  <li><b>V8 Engine</b> (built by Google)</li>
</ul>

<hr>

<h2>🔥 Why is it called V8?</h2>
<p>
The name <b>V8</b> comes from powerful V8 car engines (8-cylinder engines used in sports cars 🚗).
</p>

<ul>
  <li>⚡ Speed</li>
  <li>💪 Power</li>
</ul>

<hr>

<h2>⚡ How V8 Works (Simple Breakdown)</h2>

<h3>1️⃣ Parsing</h3>
<ul>
  <li>Reads your JavaScript code</li>
  <li>Understands its structure</li>
  <li>Like understanding grammar in a sentence</li>
</ul>

<h3>2️⃣ Compilation (JIT)</h3>
<ul>
  <li>Converts JavaScript into machine code</li>
  <li>Uses <b>Just-In-Time (JIT)</b> compilation</li>
</ul>

<h3>3️⃣ Execution</h3>
<ul>
  <li>Runs directly on CPU</li>
  <li>Very fast 🚀</li>
</ul>

<hr>

<h2>🌐 How JavaScript Runs in the Browser</h2>
<ol>
  <li>Browser receives JavaScript code</li>
  <li>Uses the <b>V8 engine</b></li>
  <li>Parse → Compile → Execute</li>
</ol>

<p>
The browser cannot understand JavaScript directly.
</p>

<hr>

<h2>❓ Why JavaScript Needed Node.js?</h2>
<p>
JavaScript was created in <b>1995</b> to run inside browsers for:
</p>

<ul>
  <li>🖱️ Button interactions</li>
  <li>✅ Form validation</li>
  <li>🎞️ Animations</li>
</ul>

<p><b>Idea:</b> What if JavaScript could run outside the browser?</p>

<hr>

<h2>🧩 How Node.js Was Created</h2>

<pre>
V8 Engine (from Chrome)
+ File System Access
+ Network Access
+ OS Access
+ Database Connectivity
--------------------------------
= Node.js
</pre>

<hr>

<h2>🖥️ What is Node.js?</h2>
<p>
<b>Node.js</b> allows JavaScript to run outside the browser.
</p>

<ul>
  <li>Uses V8 engine</li>
  <li>File system access</li>
  <li>Network capabilities</li>
  <li>OS-level operations</li>
  <li>Database connectivity</li>
</ul>

<hr>

<h2>⚡ Why Node.js is Powerful</h2>
<ul>
  <li>Fast (powered by V8)</li>
  <li>Backend development with JavaScript</li>
  <li>Highly scalable</li>
</ul>

<hr>

<h2>🎯 Summary</h2>
<ul>
  <li>JavaScript needs an engine to run</li>
  <li>V8 is a powerful engine by Google</li>
  <li>Works in 3 steps: Parse → Compile → Execute</li>
  <li>Node.js runs JavaScript outside the browser</li>
</ul>
