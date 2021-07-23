<script>
	import { Route, router } from "tinro";
	router.subscribe((_) => window.scrollTo(0, 0));
	import Home from "./components/Home.svelte";
	import Main from "./components/Main.svelte";
	import Events from "./components/Events.svelte";
	import Contact from "./components/Contact.svelte";
	import Register from "./components/Register.svelte";
import About from "./components/About.svelte";
</script>

<Route path="/">
	<Main>
		<Home />
	</Main>
</Route>

<Route path="/about">
	<Main>
		<About />
	</Main>
</Route>

<Route path="/events">
	<Main>
		<Events />
	</Main>
</Route>

<Route path="/contact">
	<Main>
		<Contact />
	</Main>
</Route>

<Route path="/register">
	<Main>
		<Register />
	</Main>
</Route>

<style>
</style>
