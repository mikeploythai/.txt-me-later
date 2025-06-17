/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import { withPayload } from "@payloadcms/next/withPayload";
import "./src/env.js";

/** @type {import("next").NextConfig} */
const nextConfig = {};

export default withPayload(nextConfig);
